import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import {SelectInput} from '../../components/FormInput/SelectInput'
export const EmployeePage=()=>{
    const [name,setName]=useState('');
    const [id,setId]=useState('');
    const [salary,setSalary]=useState('');
    const [shift,setShift]=useState('');
    const [permanant,setPermanant]=useState('No');
    const [worksOn, setWorksOn]=useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
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
                    label='EmployeeId'
                    type='number'
                    required
                    value={id}
                    set={setId}
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
        <button onClick={handleClick}>Submit</button>
        </div>

    )
}