import Web3 from 'web3';
import {
    CONTRACT_ABI,
    CONTRACT_ADDRESS
} from '../config/contract.config';

export const web3 = new Web3(Web3.givenProvider);
export const web3Socket = new Web3("wss://rinkeby.infura.io/ws/v3/381f89c05cd7411aa483a044d6df1757");
export const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);