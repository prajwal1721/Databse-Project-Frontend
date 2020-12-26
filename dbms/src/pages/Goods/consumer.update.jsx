import React from 'react';
import {ConsumerHead} from '../../components/Display/baseDate';
import {Update} from '../../components/UpdateorDelete/update';

export const ConsumerUpdate=()=>{
    return <Update 
                header={ConsumerHead}
                where={"consumer_id"}
                entity={`Consumer`}
                operation={`UPDATE`}
            />
}