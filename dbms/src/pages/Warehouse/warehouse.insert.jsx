import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import {useHistory} from 'react-router-dom';
import {SelectInput} from '../../components/FormInput/SelectInput'
import axios from '../../axiosUrl';


export const WarehouseInsert=()=>{
    const history=useHistory();
    const [location_long,setLong]=useState('');
    const [location_lat,setLat]=useState('');
    const [functional,setFunctional]=useState('');
    const [capacity,setCapacity]=useState('');
    const [supervisor,setSupervisor]=useState('');
    const [company,setCompany]=useState('');
    
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        axios.post('/warehouse/insert',{
                company:company,
                location_lat:location_lat,
                location_long:location_long,
                capacity:capacity,
                supervisor:supervisor,
                functional:functional
        })
        .then(res=>alert(res.message))
        .catch(err=>alert(err.message))
    }
    return(
        <div>
            <FormInput 
                    label='Company'
                    type='text'
                    required
                    value={company}
                    set={setCompany}
            />
            <div>Location</div>
            <FormInput 
                    label='Longitude'
                    type='number'
                    required
                    value={location_long}
                    set={setLong}
            />
            <FormInput 
                    label='Latitude'
                    type='number'
                    required
                    value={location_lat}
                    set={setLat}
            />
            <FormInput 
                    label='Capacity (in tons)'
                    type='number'
                    required
                    step={0.1}
                    value={capacity}
                    set={setCapacity}
            />
            <SelectInput 
                    label='Is functional'
                    type='text'
                    optionItems={[{id:1,value:'True'},{id:2,value:'False'}]}
                    required
                    value={functional}
                    set={setFunctional}
            />
        <div onClick={()=>history.push('/employee')}>{`Enter a new supervisor`}</div>
        <FormInput 
                    label='Supervisor Id'
                    type='number'
                    required
                    value={supervisor}
                    set={setSupervisor}
        />
        <button onClick={handleClick}>Add Warehouse</button>
        </div>

    )
}