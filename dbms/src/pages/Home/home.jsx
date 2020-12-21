import React from 'react';

export const HomeWarehouse=({match})=>{
    const [Data,getData]=useState([]);
    const fetchAll=()=>{
        axios.get('/employee/view')
        .then((res)=>{
            getData(res.data);
        })
        .catch((err)=>{
            alert(err.msg);
        })
    }
    useEffect(
        () => {
            fetchAll();
            console.log('hell');
        },
        []
      );
}