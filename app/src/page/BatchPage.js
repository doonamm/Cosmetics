import '../style/BatchPage.scss';

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ROLE } from "../helper/role";
import { stateToProps } from "../helper/stateToProps";
import { useNavigate, useParams } from 'react-router-dom';
import { contract, web3Socket } from '../helper/web3';
import toastr from 'toastr';
import MaterialTable from '../component/MaterialTable';
import Timeline from '../component/Timeline';
import { BATCH_STATUS } from '../helper/status';
import QualityTable from '../component/QualityTable';
import ProduceTable from '../component/ProduceTable';
import QR from '../component/QR';
import { CONTRACT_ADDRESS } from '../config/contract.config';

function BatchPage(props){
    const nav = useNavigate();
    const {id} = useParams();
    const {role, address} = props.account;

    const [data, setData] = useState();
    const [materials, setMaterials] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        getData();
    }, []);

    useEffect(()=>{
        if(!data)
            return;

        const status = BATCH_STATUS[data.timeline[data.timeline.length - 1].status];
        if(status === 'DONE' || status === 'CANCEL')
            return;

        console.log(1);
        const event_hash = web3Socket.utils.sha3('reload()');
        web3Socket.eth.subscribe('logs',{ address: CONTRACT_ADDRESS, topics: [event_hash]}, (error, event) => {})
        .on('data', function(event){
            getData();
        })
        .on('error', function(error, receipt) { 
            console.log('Error:', error, receipt);
        });
    }, [data]);

    async function getData(){
        const allData = await contract.methods.getProductBatch(id).call();
        setData(allData[0]);
        setMaterials(allData[1]);
        setOrders(allData[2]);
    }

    function getNextStatus(status){
        if(status === 'CREATED' && role === ROLE.MANAGER)
            return {
                name: 'Start production',
                next: 1
            };
        else if(status === 'CONFIRM' && role === ROLE.MANAGER)
            return {
                name: 'Finish production',
                next: 6
            };
        else if(status === 'PREPARE_MAT' && role === ROLE.INSPECTOR)
            return {
                name: 'Finish prepare material',
                next: 2
            };
        else if(status === 'CHECK_QUAL' && role === ROLE.INSPECTOR)
            return {
                name: 'Finish check quality',
                next: 4
            };
        else if(status === 'PRODUCE' && role === ROLE.PRODUCER)
            return {
                name: 'Finish produce',
                next: 3
            };
        else if(status === 'PACKING' && role === ROLE.PACKER)
            return {
                name: 'Finish packing',
                next: 5
            };
        else
            return null;
    }

    function changeStatus(nextStatus){
        try{
            contract.methods.changeProductBatchStatus(id, nextStatus).send({from: address})
            .once('receipt', r => {
                console.log(r);
                toastr.success('Change state success!');
                getData();
            });
        }
        catch(e){
            console.log(e);
        }
    }

    if(!data)
        return null;

    const {
        product_info: {
            name,
            quantity,
            unit
        },
        create_at,
        finished_at,
        timeline
    } = data;

    const status = BATCH_STATUS[data.timeline[data.timeline.length - 1].status];
    const canChangeStatus = status !== 'DONE' && status !== 'CANCEL';
    const nextStatus = getNextStatus(status);

    return(
        <div className="page create-po-page create-pb-page batch-page">
            <div className="center-wrapper">
                <h2>Production Batch {id}</h2>
                {
                    canChangeStatus && (
                        <div className='order-btn-container'>
                            {role === ROLE.MANAGER &&  <button className='btn cancel' onClick={()=>changeStatus(7)}>Cancel Production</button>}
                            {nextStatus && <button className='btn submit' onClick={()=>changeStatus(nextStatus.next)}>{nextStatus.name}</button>}
                        </div>
                    )
                }
                {(status === 'DONE'  && !window.location.pathname.includes('qr')) && <QR value={'/b/' + id}/>}
                <h3>Infomations:</h3>
                <p>Product: <span>{name}</span></p>
                <p>Quantity: <span>{quantity}</span></p>
                <p>Unit: <span>{unit}</span></p>
                <p>Start date: <span>{new Date(parseInt(create_at)*1000).toLocaleDateString()}</span></p>
                <p>End date: <span>{finished_at !== '0' ? new Date(parseInt(finished_at)*1000).toLocaleDateString() : ''}</span></p>
                <p>Status: <span>{status}</span></p>
                <MaterialTable 
                    role={role}
                    batchId={id} 
                    address={address} 
                    matList={data.mat_list} 
                    materials={materials || []} 
                    status={status}
                />
                <ProduceTable
                    role={role}
                    batchId={id} 
                    address={address} 
                    produceList={data.produce_list} 
                    status={status}
                />
                <QualityTable
                    role={role}
                    batchId={id} 
                    address={address} 
                    checkList={data.check_list} 
                    status={status}
                />
                <Timeline timeline={timeline} status_names={BATCH_STATUS}/>
            </div>
        </div>
    )
}

export default connect(stateToProps('account'))(BatchPage);