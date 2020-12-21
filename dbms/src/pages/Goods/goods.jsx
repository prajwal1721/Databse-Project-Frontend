import React,{useState,useEffect} from 'react';
import {Display} from '../../components/Display/display';
import { GoodsInsert } from './goods.insert';
import axios from '../../axiosUrl';
import { GoodsBar } from './goodsbar';

export const GoodsPage=()=>{
    const [select,changeSelect]=useState(0);
    const [Data,getData]=useState([]);
    const fetchAll=()=>{
        axios.get('/goods/viewAll')
        .then((res)=>{
            getData(res.data);
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
                select===2?<></>:
                select===3?<></>:
                <></>
            }
            <Display Data={Data}/>
        </div>
    )
}