import React from 'react';
import {StorageHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';
export const StorageUpdate=()=>{
    return <Update 
                header={StorageHead}
                entity={`Storage`}
                operation={`Update`}
            />
}