import React,{useState} from 'react';
import axios from '../../axiosUrl';
import {FormInput}  from '../../components/FormInput/FormInput';
import {SelectInput}  from '../../components/FormInput/SelectInput';
import {EmployeeHead} from '../../components/Display/baseDate';
export const EmployeeUpdate=()=>{
    const [parmsAdd,AddParams]=useState([]);
    const [field,setField]=useState('');
    const [value,setValue]=useState('');
    const [Header,setHeader]=useState(EmployeeHead);
    const handleAdd=async(e)=>{
        e.preventDefault();
        await setHeader( Header.filter((i)=>i.value!==field))
        await AddParams([...parmsAdd,{field:field,value:value}]);
        await setField(Header[0].value); // this is not working 
        await setValue('');
        await console.log(Header);
    }
    const handleClick=()=>{
        axios.post('/employee/update/',{parmsAdd})
        .then(res=>alert(res.message))
        .catch(err=>alert(err.message));
    }
    return (
        <div>
            <span>Update Employee</span>
            <SelectInput
                label={'Select Field'}
                required={parmsAdd.length<1}
                value={field}
                set={setField}
                optionItems={Header}
            />
            <FormInput
                required={parmsAdd.length<1}
                label='Value'
                value={value}
                set={setValue}
            /> 
            <button onClick={handleAdd}>Add parameter</button>
            {
                parmsAdd.map(i=>{
                    return (
                        <div key={i.field}>
                            <span>{i.field}</span>
                            <span>{i.value}</span>
                        </div>    
                    )
                })
            }
        <button onClick={handleClick}>Update Employee/s</button>
        </div>
    )

}