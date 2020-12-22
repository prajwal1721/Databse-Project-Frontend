import React from 'react';
import {WarehouseHead} from '../../components/Display/baseDate';
import {UpdateOrDelete} from '../../components/UpdateorDelete/updateordelete';

export const WarehouseDelete=()=>{
    return <UpdateOrDelete 
    header={WarehouseHead}
    entity={`Warehouse`}
    operation={`Delete`}
    />
}