import React from 'react';
import {EmployeeHead} from '../../components/Display/baseDate';
import {UpdateOrDelete} from '../../components/UpdateorDelete/updateordelete';

export const EmployeeUpdate=()=>{
        return <UpdateOrDelete 
                    header={EmployeeHead}
                    entity={`Employee`}
                    operation={`Update`}
                />
}