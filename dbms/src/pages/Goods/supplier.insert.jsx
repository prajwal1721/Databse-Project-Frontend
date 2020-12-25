import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import axios from '../../axiosUrl';

export const SupplierInsert=()=>{
    const [Sname,setSName]=useState('');
    const [Sphone,setSPhone]=useState('');
    const [Semail,setSEmail]=useState('');
    const [Sid,setSid]=useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        axios.post('/WarehouseStocksManagementAPI/Supplier',{
            supplier_id:1,
            supplier_name:Sname,
            phone:Sphone,
            email: Semail
        })
        .then(res=>{
            console.log("Inserted Succesfully")
            window.location.reload(true);
    })
        .catch(err=>alert(err.message))
    }
    return(
        <div>
        <div>Supplier Details</div>
        <FormInput 
                label='Supplier ID'
                type='number'
                required
                value={Sid}
                set={setSid}
        />
        <FormInput 
                label='Name'
                type='text'
                required
                value={Sname}
                set={setSName}
        />
        <FormInput 
                label='Email'
                type='email'
                required
                value={Semail}
                set={setSEmail}
        />
        <FormInput 
                label='Phone'
                type='number'
                required
                value={Sphone}
                set={setSPhone}
        />
       
         
        <button onClick={handleClick}>Add Supplier</button>
        </div>

    )
}