import {createContext, useEffect, useState} from 'react';

export const RezeptContext=createContext();
export const Provider = (children) => {
    const [rezepten,setRezepten]=useState([])
    useEffect(()=>{
        const getAllRezepten = async ()=>{
            const data=await fetch(`http://localhost:3000/rezepten`)
            const jsonData = await data.json();
            console.log(jsonData)
            setRezepten(jsonData)
        }
        getAllRezepten();

    },[])
    return (
        <RezeptContxt.Provider value={{rezepten}}>
            {children}
        </RezeptContxt.Provider>
    );
};

