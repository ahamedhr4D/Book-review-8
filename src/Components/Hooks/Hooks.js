import React, { useEffect, useState } from 'react';

const Hooks = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            const res = await fetch("/Book.json");
            const data = await res.json();
            setData(data);
            setLoading(false);
        };

        fetchData();
        
    },[]);
    return { data,loading}
    
};

export default Hooks;