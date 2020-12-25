import React from 'react';
import {EmployeeHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';

export const EmployeeUpdate=()=>{
        return <Update
                    header={EmployeeHead}
                    where={"empid"}
                    entity={`Employee`}
                    operation={`UPDATE`}
                />
}