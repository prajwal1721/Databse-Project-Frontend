import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import axios from '../../axiosUrl';

export const StorageInsert=()=>{
    const [bins,setBin]=useState('');
    const [section,setSection]=useState('');
    const [type,setType]=useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        axios.post('/storage/insert',{
                bin:bins,
                section:section,
                type:type
        }).
        then(res=>alert(res.message))
        .catch(err=>alert(err.message))
    }
    return(
        <div>
            <FormInput 
                    label='Bin'
                    type='text'
                    required
                    value={bins}
                    set={setBin}
            />
            <FormInput 
                    label='Section'
                    type='number'
                    required
                    value={section}
                    set={setSection}
            />
            <FormInput 
                    label='Type'
                    type='text'
                    required
                    value={type}
                    set={setType}
            />
         
        <button onClick={handleClick}>Submit Storage</button>
        </div>

    )
}