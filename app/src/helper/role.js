export const ROLE = {
    SUPPLIER: 0,
    INSPECTOR: 1,
    PRODUCER: 2,
    PACKER: 3,
    MANAGER: 4,
    RETAILER: 5
};

export const NUM_TO_ROLE = [
    ROLE.SUPPLIER,
    ROLE.INSPECTOR,
    ROLE.PRODUCER,
    ROLE.PACKER,
    ROLE.MANAGER,
    ROLE.RETAILER,
];

export const ROLE_TO_NAME = {
    [ROLE.SUPPLIER]: 'Supplier',
    [ROLE.INSPECTOR]: 'Inspector',
    [ROLE.PRODUCER]: 'Producer',
    [ROLE.PACKER]: 'Packer',
    [ROLE.MANAGER]: 'Manager',
    [ROLE.RETAILER]: 'Retailer'
};