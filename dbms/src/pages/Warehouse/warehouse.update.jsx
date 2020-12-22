import React from 'react';
import {WarehouseHead} from '../../components/Display/baseDate';
import {UpdateOrDelete} from '../../components/UpdateorDelete/updateordelete';

export const WarehouseUpdate=()=>{
    return <UpdateOrDelete 
    header={WarehouseHead}
    entity={`Warehouse`}
    operation={`Update`}
    />
}