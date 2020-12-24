import React,{useState,useEffect} from 'react';
import {Display} from '../../components/Display/display';
import axios from '../../axiosUrl';
import { WarehouseBar } from './warehousebar';
import {VehicleInsert} from './vehicle.insert';
import {WarehouseInsert} from './warehouse.insert'
import {StorageInsert} from './storage.insert';
import { WarehouseDelete } from './warehouse.delete';
import { WarehouseUpdate } from './warehouse.update';
import {StorageDelete } from './storage.delete';
import {StorageUpdate } from './storage.update';
import {VehicleDelete} from './vehicle.delete';
import {VehicleUpdate} from './vehicle.update';
export const WarehousePage=()=>{
        const [select,changeSelect]=useState(0);
        const [DataEmployee,getDataEmployee]=useState([]);
        const [DataWarehouse,getDataWarehouse]=useState([]);
        const [DataVehicle,getDataVehicle]=useState([]);
        const [DataStorage,getDataStorage]=useState([]);
        const fetchAll=()=>{    
            axios.get('/WarehouseStocksManagementAPI/Warehouse')
            .then((res)=>{
                console.log(res);
                getDataWarehouse(res.data.data);
            })
            .catch((err)=>{
                alert(err.msg);
            });
            axios.get('/WarehouseStocksManagementAPI/Employee')
            .then((res)=>{
                getDataEmployee(res.data.data);
            })
            .catch((err)=>{
                alert(err.msg);
            });
            axios.get('/WarehouseStocksManagementAPI/Vehicle')
            .then((res)=>{
                getDataVehicle(res.data.data);
            })
            .catch((err)=>{
                alert(err.msg);
            })
            // axios.get('/WarehouseStocksManagementAPI/Storage')
            // .then((res)=>{
            //     getDataStorage(res.data.data);
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
                    select===11?<WarehouseInsert/>:
                    select===12?<WarehouseDelete/>:
                    select===13?<WarehouseUpdate/>:
                    select===21?<StorageInsert/>:
                    select===22?<StorageDelete/>:
                    select===23?<StorageUpdate/>:
                    select===31?<VehicleInsert/>:
                    select===32?<VehicleDelete/>:
                    select===33?<VehicleUpdate/>:
                    select===4?<></>:
                    <></>
                }
                <Display Data={DataWarehouse}/>
                <Display Data={DataEmployee}/>
                <Display Data={DataVehicle}/>
                {/* <Display Data={DataStorage}/>  */}
            </div>
        )
};