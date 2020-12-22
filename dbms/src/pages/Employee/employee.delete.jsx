import React from 'react';
import {EmployeeHead} from '../../components/Display/baseDate';
import {Delete} from '../../components/UpdateorDelete/delete';

export const EmployeeDelete=()=>{
        return <Delete 
                    header={EmployeeHead}
                    entity={`Employee`}
                    operation={`Delete`}
                />
}