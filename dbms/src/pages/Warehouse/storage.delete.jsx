import React from 'react';
import {StorageHead} from '../../components/Display/baseDate';
import {Delete} from '../../components/UpdateorDelete/delete';
export const StorageDelete=()=>{
    return <Delete 
                header={StorageHead}
                entity={`Storage`}
                operation={`Delete`}
            />
}