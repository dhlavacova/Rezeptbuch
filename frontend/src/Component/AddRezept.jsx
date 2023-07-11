import React, {useContext,useState} from 'react';
import {RezeptContext} from "../Context.jsx";

const AddRezept = () => {
    const{submitHandler,setRezepten}=useContext(RezeptContext)
    const [title, setTitle] = useState('');
    const [zutaten, setZutaten] = useState('');
    const [zubereitung, setZubereitung] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('klik');
        const neuRezept = {
            title,
            "zutaten":[zutaten],
            zubereitung
        };


        submitHandler(e,neuRezept);

        setTitle('');
        setZutaten('');
        setZubereitung('');
    };
    return (

        <div className='AddRezept'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Title</label>
               <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label htmlFor="zutaten">Zutaten</label>
                <input type="text" name='zutaten' value={zutaten} onChange={(e)=>setZutaten(e.target.value)} />
                <label htmlFor="zubereitung">Zubereitung</label>
                <input type="text" name="zubereitung" value={zubereitung} onChange={(e)=>setZubereitung(e.target.value)} />
                <input type="submit" value='send'/>
            </form>
        </div>
    );
};
export default AddRezept;