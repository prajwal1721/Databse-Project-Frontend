import React from 'react';
import {WarehouseHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';

export const WarehouseUpdate=()=>{
    return <Update 
    header={WarehouseHead}
    entity={`Warehouse`}
    operation={`Update`}
    />
}