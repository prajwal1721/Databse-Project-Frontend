import React,{useState} from 'react';
import axios from '../../axiosUrl';
import {FormInput}  from '../FormInput/FormInput';
import {SelectInput}  from '../FormInput/SelectInput';
export const Delete=({header,operation,entity})=>{
    const [parmsAdd,AddParams]=useState([]);
    const [field,setField]=useState('');
    const [value,setValue]=useState('');
    const [Header,setHeader]=useState(header);
    const handleAdd=async(e)=>{
        e.preventDefault();
        if(field==='' || value===''|| field==='Select'){
            alert("Enter the required Fields");
            return ;
        }
        await setHeader( Header.filter((i)=>i.value!==field))
        await AddParams([...parmsAdd,{field:field,value:value}]);
        await setField(Header[0].value); // this is not working 
        await setValue('');
        // await console.log(Header);
    }
    const handleClick=()=>{
        axios.post(`/${entity.toLowerCase()}/${operation.toLowerCase()}/`,{parmsAdd})
        .then(res=>alert(res.message))
        .catch(err=>alert(err.message));
    }
    return (
        <div>
            <span>{`${operation} ${entity}`}</span>
            <SelectInput
                label={'Select Field'}
                required={parmsAdd.length<1}
                value={field}
                set={setField}
                optionItems={Header}
                placeHolder={'Select'}
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
        <button onClick={handleClick}>{`${operation} ${entity}`}</button>
        </div>
    )

}