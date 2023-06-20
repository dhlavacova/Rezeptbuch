import {createContext, useEffect, useState} from 'react';

export const RezeptContext=createContext();
export const Provider = ({children}) => {
    const [rezepten,setRezepten]=useState([])
   /* const [addRezept,setAddRezept]=useState({})*/
    const fetchData = async ()=>{
        const data=await fetch(`http://localhost:3000/rezepten`)
        const jsonData = await data.json();
        console.log(jsonData)
        setRezepten(jsonData)
        console.log('context',rezepten)
    }
    useEffect(()=>{

        fetchData();

    },[])
    const deleteHandler=async (id)=>{
const response=await fetch (`http://localhost:3000/rezepten/${id}`,
    {
        method: "DELETE",
    })
const readableResponse=await response.text();
fetchData();
}
/*
const submitHandler=async (e,addRezept)=>{
        e.preventDefault();
setRezepten(prev=>[...prev,addRezept])
    const data = await fetch("http://localhost:3000/rezepten", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addRezept),
    });
    fetchData();
};*/


    return (
        <RezeptContext.Provider value={{rezepten,setAddRezept,deleteHandler, submitHandler}}>
            {children}
        </RezeptContext.Provider>
    );
};

