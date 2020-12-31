import React from 'react';
import {GoodsHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';
export const GoodsUpdate=()=>{
            return <Update 
                        header={GoodsHead}
                        where={"goods_id"}
                        entity={`Goods`}
                        operation={`Update`}
                    />
}