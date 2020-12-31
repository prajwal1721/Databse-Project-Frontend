import React,{useState} from 'react';
import {FormInput} from '../../components/FormInput/FormInput'
import {useHistory} from 'react-router-dom';
import {SelectInput} from '../../components/FormInput/SelectInput'
import axios from '../../axiosUrl';


export const WarehouseInsert=()=>{
    const history=useHistory();
    //const [location_long,setLong]=useState('');
    //const [location_lat,setLat]=useState('');
    const [wid,setWid]=useState('');
    const [functional,setFunctional]=useState('');
    const [address,setAddress]=useState('');
    const [supervisor,setSupervisor]=useState('');
    const [company,setCompany]=useState('');
    
    const handleClick=(e)=>{
        e.preventDefault();
        console.log('submit');
        axios.post('/WarehouseStocksManagementAPI/Warehouse',
        {
                Wid : Number.parseInt(wid),
                is_functional : (functional === "True"?1:0),
                company:company, 
                address: address,
                supervisor_id : 0
        }
        
       /*  {
                company:company,
                location_lat:location_lat,
                location_long:location_long,
                capacity:capacity,
                supervisor:supervisor,
                functional:functional
        } */)
        .then(res=>{
                console.log("Inserted Succesfully")
                window.location.reload(true);
        }
        )
        .catch(err=>alert(err.message))
    }
    return(
        <div style={{margin: '10px', border: '2px solid black', borderRadius: '10px', padding:'0px 10px 10px 10px'}}>
        <div style={{fontSize: '24px', fontWeight: '600', margin: '10px'}}>Warehouse Details</div>
                <FormInput 
                        label='ID'
                        type='number'
                        required
                        value={wid}
                        set={setWid}
                />
            <FormInput 
                    label='Company'
                    type='text'
                    required
                    value={company}
                    set={setCompany}
            />
           { /* 
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
                />  */
           } 
            <FormInput 
                    label='Address'
                    type='text'
                    required
                    value={address}
                    set={setAddress}
            />
            <SelectInput 
                    label='Is functional'
                    type='number'
                    optionItems={[{id:1,value:'True'},{id:2,value:'False'}]}
                    required
                    value={functional}
                    set={setFunctional}
            />
     {
        /* <div onClick={()=>history.push('/employee')}>{`Enter a new supervisor`}</div>
        <FormInput 
                    label='Supervisor Id'
                    type='number'
                    required
                    value={supervisor}
                    set={setSupervisor}
        /> */
     }  
        <button onClick={handleClick}>Add Warehouse</button>
        </div>

    )
}