import React from 'react';
import {VehicleHead} from '../../components/Display/baseDate';
import {Delete} from '../../components/UpdateorDelete/delete';

export const VehicleDelete=()=>{
    return <Delete 
                header={VehicleHead}
                entity={`Vehicle`}
                operation={`Delete`}
            />
}