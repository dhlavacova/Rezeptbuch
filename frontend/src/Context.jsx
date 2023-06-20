import {createContext, useEffect, useState} from 'react';

export const RezeptContext=createContext();
export const Provider = ({children}) => {
    const [rezepten,setRezepten]=useState([])

    const fetchData = async ()=>{
        const data=await fetch(`http://localhost:3000/rezepten`)
        const jsonData = await data.json();
        console.log(jsonData)
        setRezepten(jsonData)
        console.log('context',rezepten)
    }

    const deleteHandler=async (id)=>{
const response=await fetch (`http://localhost:3000/rezepten/${id}`,
    {
        method: "DELETE",
    })
const readableResponse=await response.text();
fetchData();
}
//......
const submitHandler=async (e,neuRezepten)=>{
        e.preventDefault();
        console.log('neurezept',neuRezepten)
        setRezepten((prev)=>[...prev,neuRezepten])
console.log('all rezepten',rezepten)
    const data = await fetch("http://localhost:3000/rezepten", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(neuRezepten),
    });
    fetchData();
};
    useEffect(()=>{

        fetchData();

    },[])

    return (
        <RezeptContext.Provider value={{rezepten,setRezepten,deleteHandler,submitHandler}}>
            {children}
        </RezeptContext.Provider>
    );
};



