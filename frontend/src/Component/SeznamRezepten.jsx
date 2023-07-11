import React, {useContext} from 'react';
import {RezeptContext} from "../Context.jsx";

const SeznamRezepten = () => {
    const {rezepten,deleteHandler} =useContext(RezeptContext)
console.log(rezepten.map(el => el.zutaten))

    return (
        <div className='list-container'>
            <h1>Alle Rezepten</h1>
            <ul>
                {rezepten.map((el, index) => (
                    <li key={index}><h1>{el.title} </h1>{el.zutaten.map((el,index)=><li key={index}>el</li>)}<button onClick={()=>deleteHandler(el.id)}>delete</button></li>
                ))}
            </ul>
        </div>
    );
};

export default SeznamRezepten;