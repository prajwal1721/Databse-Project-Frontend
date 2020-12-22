import React from 'react';
import {VehicleHead} from '../../components/Display/baseDate';
import {UpdateOrDelete} from '../../components/UpdateorDelete/updateordelete';

export const VehicleUpdate=()=>{
    return <UpdateOrDelete 
                header={VehicleHead}
                entity={`Vehicle`}
                operation={`Update`}
            />
}