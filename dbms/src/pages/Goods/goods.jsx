import React,{useState,useEffect} from 'react';
import {Display} from '../../components/Display/display';
import { GoodsInsert } from './goods.insert';
import axios from '../../axiosUrl';
import { GoodsBar } from './goodsbar';
import { GoodsDelete } from './goods.delete';
import { GoodsUpdate } from './goods.update';

export const GoodsPage=()=>{
    const [select,changeSelect]=useState(0);
    const [Data,getData]=useState([]);
    const fetchAll=()=>{
        axios.get('/WarehouseStocksManagementAPI/Employee')
        .then((res)=>{
            getData(res.data.data);
        })
        .catch((err)=>{
            alert(err.msg);
        })
    }
    useEffect(
        () => {
            fetchAll();
            console.log('hell');
        },
        []
      );
    return(
        <div>
            <GoodsBar setOption={changeSelect}/>
            {
                select===1?<GoodsInsert/>:
                select===3?<GoodsDelete/>:
                select===2?<GoodsUpdate/>:
                select===4?<></>:
                <></>
            }
            <Display Data={Data}/>
        </div>
    )
}