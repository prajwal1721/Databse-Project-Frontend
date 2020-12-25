import React,{useState,useEffect} from 'react';
import {Display} from '../../components/Display/display';
import axios from '../../axiosUrl';
import { GoodsBar } from './goodsbar';
import { GoodsDelete } from './goods.delete';
import { GoodsInsert } from './goods.insert';
import { GoodsUpdate } from './goods.update';
import { SupplierInsert } from './supplier.insert';
import { SupplierUpdate } from './supplier.update';
import { ConsumerInsert } from './consumer.insert';
import { ConsumerUpdate } from './consumer.update';
import { CategoryInsert } from './category.insert';
import { CategoryUpdate } from './category.update';
import { LogisticsUpdate } from './logistics.update';
import { LogisticsInsert } from './logistics.insert';

export const GoodsPage=()=>{
    const [select,changeSelect]=useState(0);
    const [LogisticsData,LogisticsgetData]=useState([]);
    const [ConsumerData,ConsumergetData]=useState([]);
    const [SupplierData,SuppliergetData]=useState([]);
    const [GoodsData,GoodsgetData]=useState([]);
    const [CategoryData,CategorygetData]=useState([]);
    const fetchAll=()=>{
        axios.get('/WarehouseStocksManagementAPI/Logistics')
        .then((res)=>{
            LogisticsgetData(res.data.data);
        })
        .catch((err)=>{
            alert(err.msg);
        })
        axios.get('/WarehouseStocksManagementAPI/Consumer')
        .then((res)=>{
            ConsumergetData(res.data.data);
        })
        .catch((err)=>{
            alert(err.msg);
        })
        axios.get('/WarehouseStocksManagementAPI/Supplier')
        .then((res)=>{
            SuppliergetData(res.data.data);
        })
        .catch((err)=>{
            alert(err.msg);
        })
        axios.get('/WarehouseStocksManagementAPI/Goods')
        .then((res)=>{
            GoodsgetData(res.data.data);
        })
        .catch((err)=>{
            alert(err.msg);
        })
        axios.get('/WarehouseStocksManagementAPI/Category')
        .then((res)=>{
            CategorygetData(res.data.data);
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
                select===11?<LogisticsInsert/>:
             //   select===?<LogisticsDelete/>:
                select===12?<LogisticsUpdate/>:
                select===21?<ConsumerInsert/>:
            //    select===3?<ConsumerDelete/>:
                select===22?<ConsumerUpdate/>:
                select===31?<GoodsInsert/>:
            //    select===3?<GoodsDelete/>:
                select===32?<GoodsUpdate/>:
                select===41?<CategoryInsert/>:
            //    select===3?<CategoryDelete/>:
                select===42?<CategoryUpdate/>:
                select===51?<SupplierInsert/>:
            //    select===3?<SupplierDelete/>:
                select===52?<SupplierUpdate/>:
                select===4?<></>:
                <></>
            }
            <Display Data={LogisticsData} heading="Logistics"/>
            <Display Data={ConsumerData} heading="Consumer"/>
            <Display Data={GoodsData} heading="Goods"/>
            <Display Data={CategoryData} heading="Category"/>
            <Display Data={SupplierData} heading="Supplier"/>
        </div>
    )
}