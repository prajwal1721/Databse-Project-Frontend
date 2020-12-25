import React,{useState} from 'react';
import axios from '../../axiosUrl';
import {FormInput}  from '../FormInput/FormInput';
import {SelectInput}  from '../FormInput/SelectInput';
export const Update=({header,operation,entity,where})=>{
    const [parmsAdd,AddParams]=useState([]);
    const [parmsNew,NewParams]=useState([]);
    const [field,setField]=useState('');
    const [value,setValue]=useState('');
    const [type,setType]=useState('');
    const [Ufield,setUField]=useState('');
    const [Uvalue,setUValue]=useState('');
    const [Header,setHeader]=useState(header);
    var set = "";
    var query="";
    const handleAdd=async(e)=>{
        e.preventDefault();
        if(field==='' || value==='' || field==='Select'){
            alert("Enter the required Fields");
            return ;
        }
        await setHeader( Header.filter((i)=>i.value!==field))
        await AddParams([...parmsAdd,{field:field,value:value}]);
        await setValue('');
        await setField('');
        // await console.log(Header);
    }
    /* const handleNew=async(e)=>{
        e.preventDefault();
        if(Ufield==='' || Uvalue==='' || Ufield==='Select'){
            alert("Enter the required Fields");
            return;
        }
        if(Ufield==='id'){
            alert("Id cannot change");
            return;
        }
        await setHeader( Header.filter((i)=>i.value!==Ufield))
        await NewParams([...parmsNew,{field:Ufield,value:Uvalue}]);
        await setUField('');
        await setUValue('');
        // await console.log(Header);
    } */
    const handleClick=()=>{
        console.log(`/WarehouseStocksManagementAPI/${entity}`)
        //WarehouseStocksManagementAPI/Employee
        axios.post(`/UpdateData`,{query})
        .then(res=>alert(res.message))
        .catch(err=>alert(err.message));
    }
    return (
        <div>
            <span>{`${operation} ${entity}`}</span>

            {/* update params */}
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
            
            <button onClick={handleAdd}>Add parameter</button><br></br> 
            {
                parmsAdd.map(i=>{
                    set += ` \`${i.field}\` = '${i.value}',`;
                    /* return (

                        <div key={i.field}>
                            <span>{i.field}</span>
                            <span>{i.value}</span>
                        </div>    
                    ) */
                })
            }
        <span>{`where  `}</span>
            {/* new values */}
            {/* <SelectInput
                label={'Select Field'}
                value={Ufield}
                set={setUField}
                optionItems={Header}
            /> */}
            {where}:
            <FormInput
                label='Value'
                value={Uvalue}
                set={setUValue}
            /> 
           {/*  <button onClick={handleNew}>Update Value</button>
            {
                parmsNew.map(i=>{
                    return (
                        <div key={i.field}>
                            <span>{i.field}</span>
                            <span>{i.value}</span>
                        </div>    
                    )
                })
            } */}
            <div>{
                query = ` ${operation} \`DBMS_Project\`.\`${entity}\` SET ${set.slice(0, -1)} WHERE (\`${where}\` = '${Uvalue}');`
                
            }
            </div>
        <button onClick={handleClick}>Update</button>

        </div>
    )

}