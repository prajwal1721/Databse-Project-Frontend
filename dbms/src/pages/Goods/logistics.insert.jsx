import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import axios from '../../axiosUrl';

export const LogisticsInsert=()=>{
    const [startLocationArrival,setStartLocationArrival]=useState('');
    const [dispatchTimeArrival,setDispatchTimeArrival]=useState('');
    const [recieveTimeArrival,setRecieveTimeArrival]=useState('');
    const [endLocationDeparture,setEndLocationDeparture]=useState('');
    const [vehicleNumber,setVehicleNumber]=useState('');
    const [Lid,setLid]=useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        axios.post('/WarehouseStocksManagementAPI/Logistics',{
            logistics_id: Lid,
            start_addr: startLocationArrival,
            end_addr:endLocationDeparture,
            dispatch_datetime:dispatchTimeArrival,
            receive_datetime: recieveTimeArrival,
            vehicle: vehicleNumber
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
        <div>Logistics Details</div>
            <FormInput 
            label='Logistics ID'
            type='number'
            required
            value={Lid}
            set={setLid}
    />

            <div>{`Arrival Details`}</div>
            
            <FormInput 
                    label='Start Location'
                    type='text'
                    required
                    value={startLocationArrival}
                    set={setStartLocationArrival}
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
                    label='End Location '
                    type='text'
                    required
                    value={endLocationDeparture}
                    set={setEndLocationDeparture}
            />
            <FormInput 
                    label='Vehicle Number'
                    type='text'
                    required
                    value={vehicleNumber}
                    set={setVehicleNumber}
            />
         
        <button onClick={handleClick}>Add Supplier</button>
        </div>

    )
}