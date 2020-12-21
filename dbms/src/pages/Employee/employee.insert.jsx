import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import {SelectInput} from '../../components/FormInput/SelectInput'
import axios from '../../axiosUrl';
export const EmployeeInsert=()=>{
    const [name,setName]=useState('');
    const [salary,setSalary]=useState('');
    const [shift,setShift]=useState('');
    const [permanant,setPermanant]=useState('No');
    const [worksOn, setWorksOn]=useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        axios.post('/employee/insert',{
                name:name,
                salary:salary,
                shift:shift,
                permanant:permanant,
                worksOn:worksOn
        })
        .then(res=>alert(res.message))
        .catch(err=>alert(err.message))
    }
    return(
        <div>
            <FormInput 
                    label='Name'
                    type='text'
                    required
                    value={name}
                    set={setName}
            />
            <FormInput 
                    label='Salary'
                    type='number'
                    required
                    value={salary}
                    set={setSalary}
            />
            <FormInput 
                    label='Shift'
                    type='text'
                    required
                    value={shift}
                    set={setShift}
            />
            <FormInput 
                    label='Works on'
                    type='number'
                    required
                    value={worksOn}
                    set={setWorksOn}
            />
            <SelectInput 
                    label='Is Permanant'
                    type='text'
                    optionItems={[{id:1,value:'True'},{id:2,value:'False'}]}
                    required
                    value={permanant}
                    set={setPermanant}
            />
        <button onClick={handleClick}>Add Employee</button>
        </div>

    )
}