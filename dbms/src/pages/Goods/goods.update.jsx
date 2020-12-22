import React from 'react';
import {GoodsHead} from '../../components/Display/baseDate';
import {UpdateOrDelete} from '../../components/UpdateorDelete/updateordelete';
export const GoodsUpdate=()=>{
            return <UpdateOrDelete 
                        header={GoodsHead}
                        entity={`Goods`}
                        operation={`Update`}
                    />
}