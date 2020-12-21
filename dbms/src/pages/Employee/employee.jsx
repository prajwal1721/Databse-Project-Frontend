import React,{useState,useEffect} from 'react';
import {EmployeeBar} from './employeebar';
import axios  from '../../axiosUrl';
export const EmployeePage=()=>{
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
        },
        []
      );
    return(
        <div>
            <EmployeeBar/>
        
            {console.log('hello')}
            {
                Data.map((data)=>
                data.map((i)=>{
                    return <div key={i.field}>
                            <span>{i.value}</span>
                        </div>
                }))
            }
        </div>
    )
};
