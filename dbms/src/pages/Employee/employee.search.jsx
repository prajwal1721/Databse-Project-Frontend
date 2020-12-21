import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import axios from '../../axiosUrl';
export const EmployeeSearch=()=>{

    const [id,setId]=useState('');
    const [data,setData]=useState({});
    const [click,toggleClick]=useState(false);
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        fetch();
    }
    const fetch=()=>{
        axios.get('/employee/view',{id:id})
        .then((res)=>{
            setData(res.data);
            toggleClick(true);
        })
        .catch((err)=>{
            alert(err.msg);
        })
    }
    return(
        <div>
            <FormInput 
                    label='EmployeeId'
                    type='number'
                    required
                    value={id}
                    set={setId}
            />
        <button onClick={handleClick}>Search</button>
        {
            click?
                data.map((i)=>{
                    return <div key={i.field}>
                            <span>{i.field}</span>
                            <span>{i.value}</span>
                        </div>
                }):<></>
        }
        </div>
    )
}