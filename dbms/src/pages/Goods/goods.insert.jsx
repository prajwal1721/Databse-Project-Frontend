import React, { useState }  from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import {SelectInput} from '../../components/FormInput/SelectInput';
import axios from '../../axiosUrl';

export const GoodsInsert=()=>{
    // goods details
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [weight,setWeight]=useState('');
    const [sensitive,setSensitive]=useState('');

    // consumer details
    const [Cname,setCName]=useState('');
    const [Cphone,setCPhone]=useState('');
    const [Cemail,setCEmail]=useState('');
    
    // supplier details
    const [Sname,setSName]=useState('');
    const [Sphone,setSPhone]=useState('');
    const [Semail,setSEmail]=useState('');
    
    // logistics details
    const [startLocationArrival,setStartLocationArrival]=useState('');
    const [endLocationArrival,setEndLocationArrival]=useState('');
    const [dispatchTimeArrival,setDispatchTimeArrival]=useState('');
    const [recieveTimeArrival,setRecieveTimeArrival]=useState('');
    const [endLocationDeparture,setEndLocationDeparture]=useState('');
    const [startLocationDeparture,setStartLocationDeparture]=useState('');
    const [dispatchTimeDeparture,setDispatchTimeDeparture]=useState('');
    const [recieveTimeDeparture,setRecieveTimeDeparture]=useState('');
    
    // other details    
    const [vehicleNumber,setVehicleNumber]=useState('');
    const [storageId,setStorageId]=useState('');
    const [categoryId,setCategoryId]=useState('');

    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        axios.post('/goods/insert',{
                name:name,
                price:price,
                weight:weight,
                sensitive:sensitive,
                Cname: Cname,
                Cphone: Cphone,
                Cemail : Cemail,
                Sname: Sname,
                Sphone: Sphone,
                SelectInput: Semail,
                endLocationArrival: endLocationArrival,
                endLocationDeparture : endLocationDeparture,
                startLocationArrival: startLocationArrival,
                startLocationDeparture : startLocationDeparture,
                dispatchTimeArrival: dispatchTimeArrival,
                dispatchTimeDeparture :dispatchTimeDeparture,
                recieveTimeArrival: recieveTimeArrival,
                recieveTimeDeparture: recieveTimeDeparture,
                vehicleNumber: vehicleNumber,
                storageId: storageId,
                categoryId: categoryId
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
                    label='Price'
                    type='number'
                    required
                    value={price}
                    set={setPrice}
            />
            <FormInput 
                    label='Weight'
                    type='number'
                    required
                    value={weight}
                    set={setWeight}
            />
            <SelectInput 
                    label='Is Sensitive'
                    type='text'
                    optionItems={[{id:1,value:'True'},{id:2,value:'False'}]}
                    required
                    value={sensitive}
                    set={setSensitive}
            />
            
            <div>Cousumer Details</div>
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

            <div>Supplier Details</div>
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
            <FormInput 
                    label='Storage Id'
                    type='number'
                    required
                    value={storageId}
                    set={setStorageId}
            />
            <FormInput 
                    label='Category Id'
                    type='number'
                    required
                    value={categoryId}
                    set={setCategoryId}
            />

            <div>Logistics Details</div>

            <div>{`Arrival Details`}</div>
            
            <FormInput 
                    label='Start Location'
                    type='text'
                    required
                    value={startLocationArrival}
                    set={setStartLocationArrival}
            />
            <FormInput 
                    label='End Location '
                    type='text'
                    required
                    value={endLocationArrival}
                    set={setEndLocationArrival}
            />
            <FormInput 
                    label='Dispatch Date and Time'
                    type='text'
                    required
                    value={dispatchTimeArrival}
                    set={setDispatchTimeArrival}
            />
            <FormInput 
                    label='Recieve Date and Time'
                    type='text'
                    required
                    value={recieveTimeArrival}
                    set={setRecieveTimeArrival}
            />

            <div>{`Departure Details`}</div>
            
            <FormInput 
                    label='Start Location'
                    type='text'
                    required
                    value={startLocationDeparture}
                    set={setStartLocationDeparture}
            />
            <FormInput 
                    label='End Location '
                    type='text'
                    required
                    value={endLocationDeparture}
                    set={setEndLocationDeparture}
            />
            <FormInput 
                    label='Dispatch Date and Time'
                    type='text'
                    required
                    value={dispatchTimeDeparture}
                    set={setDispatchTimeDeparture}
            />
            <FormInput 
                    label='Recieve Date and Time'
                    type='text'
                    required
                    value={recieveTimeDeparture}
                    set={setRecieveTimeDeparture}
            />
            <FormInput 
                    label='Vehicle'
                    type='text'
                    required
                    value={vehicleNumber}
                    set={setVehicleNumber}
            />
            
            
        <button onClick={handleClick}>Add Good</button>
        </div>

    )
}