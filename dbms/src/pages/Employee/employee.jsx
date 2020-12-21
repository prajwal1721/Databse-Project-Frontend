import React,{useState,useEffect} from 'react';
import {EmployeeBar} from './employeebar';
import {EmployeeInsert} from './employee.insert';
import {EmployeeSearch} from './employee.search';
import {Display} from './display';
import axios  from '../../axiosUrl';
export const EmployeePage=()=>{
    const [select,changeSelect]=useState(0);
    const [Data,getData]=useState([]);
    const fetchAll=()=>{
        axios.get('/employee/viewAll')
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
            <EmployeeBar setOption={changeSelect}/>
            {
                select===1?<EmployeeInsert/>:
                select===2?<></>:
                select===3?<></>:
                select===4?<EmployeeSearch/>:
                <></>
            }
            <Display Data={Data}/>
        </div>
    )
};
