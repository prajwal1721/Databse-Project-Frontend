import React from 'react';
import {StorageHead} from '../../components/Display/baseDate';
import {UpdateOrDelete} from '../../components/UpdateorDelete/updateordelete';
export const StorageDelete=()=>{
    return <UpdateOrDelete 
                header={StorageHead}
                entity={`Storage`}
                operation={`Delete`}
            />
}