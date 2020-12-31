import React from 'react';
import {SupplierHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';
export const SupplierUpdate=()=>{
            return <Update 
                        header={SupplierHead}
                        where={"supplier_id"}
                        entity={`Supplier`}
                        operation={`Update`}
                    />
}