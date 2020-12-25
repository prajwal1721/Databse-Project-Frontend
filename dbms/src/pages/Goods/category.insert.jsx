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
        <div>
        <div>Category Details</div>
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