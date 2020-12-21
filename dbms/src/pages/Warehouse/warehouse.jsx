import React,{useState,useEffect} from 'react';
import {Display} from '../../components/Display/display';
import axios from '../../axiosUrl';
import { WarehouseBar } from './warehousebar';
import {VehicleInsert} from './vehicle.insert';
import {WarehouseInsert} from './warehouse.insert'
import {StorageInsert} from './storage.insert';
export const WarehousePage=()=>{
        const [select,changeSelect]=useState(0);
        const [DataEmployee,getDataEmployee]=useState([]);
        const [DataWarehouse,getDataWarehouse]=useState([]);
        const [DataVehicle,getDataVehicle]=useState([]);
        const [DataStorage,getDataStorage]=useState([]);
        // const [DataEmployee,getData]=useState([]);
        const fetchAll=()=>{    
            axios.get('/warehouse/viewAll')
            .then((res)=>{
                getDataWarehouse(res.data);
            })
            .catch((err)=>{
                alert(err.msg);
            });
            // axios.get('/employee/viewAll')
            // .then((res)=>{
            //     getDataEmployee(res.data);
            // })
            // .catch((err)=>{
            //     alert(err.msg);
            // });
            // axios.get('/vehicle/viewAll')
            // .then((res)=>{
            //     getDataVehicle(res.data);
            // })
            // .catch((err)=>{
            //     alert(err.msg);
            // })
            // axios.get('/storage/viewAll')
            // .then((res)=>{
            //     getDataStorage(res.data);
            // })
            // .catch((err)=>{
            //     alert(err.msg);
            // })
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
                <WarehouseBar setOption={changeSelect}/>
                {
                    select===1?<WarehouseInsert/>:
                    select===2?<StorageInsert/>:
                    select===3?<VehicleInsert/>:
                    select===4?<></>:
                    <></>
                }
                <Display Data={DataWarehouse}/>
                {/* <Display Data={DataEmployee}/>
                <Display Data={DataVehicle}/>
                <Display Data={DataStorage}/> */}
            </div>
        )
};