import React, {useContext} from 'react';
import {RezeptContext} from "../Context.jsx";

const SeznamRezepten = () => {
    const {rezepten,deleteHandler} =useContext(RezeptContext)


    return (
        <div className='list-container'>
            <h1>Alle Rezepten</h1>
            <ul>
                {rezepten.map((el, index) => (
                    <li key={index}>{el.title}<button onClick={()=>deleteHandler(el.id)}>delete</button></li>
                ))}
            </ul>
        </div>
    );
};

export default SeznamRezepten;