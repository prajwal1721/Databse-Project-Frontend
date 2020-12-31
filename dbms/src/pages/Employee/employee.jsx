import React,{useState,useEffect} from 'react';
import {EmployeeBar} from './employeebar';
import {EmployeeInsert} from './employee.insert';
import {EmployeeSearch} from './employee.search';
import {EmployeeDelete} from './employee.delete';
import {EmployeeUpdate} from './employee.update';
import {Display} from '../../components/Display/display';
import axios  from '../../axiosUrl';
export const EmployeePage=()=>{
    const [select,changeSelect]=useState(0);
    const [Data,getData]=useState([]);
    const fetchAll=()=>{
        axios.get('/WarehouseStocksManagementAPI/Employee')
        .then((res)=>{
            console.log(res);
            getData(res.data.data);
        })
        .catch((err)=>{
            alert(err.msg);
        })
    }
    useEffect(
        () => {
            fetchAll();
        },
        []
      );
    return(
        <div>
            <EmployeeBar setOption={changeSelect} />
            {
                select===1?<EmployeeInsert/>:
                select===2?<EmployeeUpdate/>:
                select===3?<EmployeeDelete/>:
                select===4?<EmployeeSearch/>:
                <></>
            }
            <Display Data={Data} heading="Employee"/>
        </div>
    )
};
