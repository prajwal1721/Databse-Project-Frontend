import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import axios from '../../axiosUrl';

export const ConsumerInsert=()=>{
    const [Cname,setCName]=useState('');
    const [Cphone,setCPhone]=useState('');
    const [Cemail,setCEmail]=useState('');
    const [Cid,setCid]=useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        axios.post('/WarehouseStocksManagementAPI/Consumer',{
            consumer_id:Cid,
            consumer_name: Cname,
            phone:Cphone,
            email: Cemail
         }
         )
        .then(res=>{
            console.log("Inserted Succesfully")
            window.location.reload(true);
    })
        .catch(err=>alert(err.message))
    }
    return(
        <div style={{margin: '10px', border: '2px solid black', borderRadius: '10px', padding:'0px 10px 10px 10px'}}>
        <div style={{fontSize: '24px', fontWeight: '600', margin: '10px'}}>Customer Details</div>
        <FormInput 
                label='Consumer ID'
                type='number'
                required
                value={Cid}
                set={setCid}
        />
        <FormInput 
                label='Name'
                type='text'
                required
                value={Cname}
                set={setCName}
        />
        <FormInput 
                label='Email'
                type='email'
                required
                value={Cemail}
                set={setCEmail}
        />
        <FormInput 
                label='Phone'
                type='number'
                required
                value={Cphone}
                set={setCPhone}
        />
        <button onClick={handleClick}>Add Consumer</button>
        </div>

    )
}