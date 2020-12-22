import React from 'react';
import {GoodsHead} from '../../components/Display/baseDate';
import {Delete} from '../../components/UpdateorDelete/delete';
export const GoodsDelete=()=>{
            return <Delete 
                        header={GoodsHead}
                        entity={`Goods`}
                        operation={`Delete`}
                    />

}