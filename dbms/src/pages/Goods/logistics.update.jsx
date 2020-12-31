import React from 'react';
import {LogisticsHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';
export const LogisticsUpdate=()=>{
            return <Update 
                        header={LogisticsHead}
                        where={"logistics_id"}
                        entity={`Logistics`}
                        operation={`Update`}
                    />
}