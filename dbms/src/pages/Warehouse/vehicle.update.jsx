import React from 'react';
import {VehicleHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';

export const VehicleUpdate=()=>{
    return <Update 
                header={VehicleHead}
                where={"reg_num"}
                entity={`Vehicle`}
                operation={`Update`}
            />
}