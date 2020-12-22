import React from 'react';
import {EmployeeHead} from '../../components/Display/baseDate';
import {UpdateOrDelete} from '../../components/UpdateorDelete/updateordelete';

export const EmployeeDelete=()=>{
        return <UpdateOrDelete 
                    header={EmployeeHead}
                    entity={`Employee`}
                    operation={`Delete`}
                />
}