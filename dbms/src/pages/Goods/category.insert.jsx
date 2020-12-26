import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import axios from '../../axiosUrl';


export const CategoryInsert=()=>{
    const [categoryId,setCategoryId]=useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        axios.post('/WarehouseStocksManagementAPI/Category',{
            category_name: categoryId
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
        <div style={{fontSize: '24px', fontWeight: '600', margin: '10px'}}>Category Details</div>
        <FormInput 
            label='Category'
            type='Text'
            required
            value={categoryId}
            set={setCategoryId}
    />
        <button onClick={handleClick}>Add Category</button>
        </div>

    )
}