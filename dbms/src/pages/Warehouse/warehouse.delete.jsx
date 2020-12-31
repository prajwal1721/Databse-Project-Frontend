import React from 'react';
import {WarehouseHead} from '../../components/Display/baseDate';
import {Delete} from '../../components/UpdateorDelete/delete';

export const WarehouseDelete=()=>{
    return <Delete 
    header={WarehouseHead}
    entity={`Warehouse`}
    operation={`Delete`}
    />
}