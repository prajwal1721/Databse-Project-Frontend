import React from 'react';
import {EmployeeHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';

export const EmployeeUpdate=()=>{
        return <Update
                    header={EmployeeHead}
                    entity={`Employee`}
                    operation={`Update`}
                />
}