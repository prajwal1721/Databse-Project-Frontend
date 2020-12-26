import React from 'react';
import {CategoryHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';

export const CategoryUpdate=()=>{
    return <Update 
                header={CategoryHead}
                where={"category_name"}
                entity={`Category`}
                operation={`UPDATE`}
            />
}