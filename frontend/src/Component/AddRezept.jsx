/*import React, {useContext,useState} from 'react';
import {RezeptContext} from "../Context.jsx";

const AddRezept = () => {
    const{submitHandler,setAddRezept}=useContext(RezeptContext)
    const [title, setTitle] = useState('');
    const [zutaten, setZutaten] = useState('');
    const [zubereitung, setZubereitung] = useState('');

let neuRezept=   {
    "title":title,
    "zutaten":zutaten,
    "zubereitung":zubereitung
}
setAddRezept(neuRezept)

    return (

        <div className='AddRezpet'>
            <form >
                <label htmlFor="name">Title</label>
               <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label htmlFor="zutaten">Zutaten</label>
                <input type="text" name='zutaten' value={zutaten} onChange={(e)=>setZutaten(e.target.value)} />
                <label htmlFor="zubereitung">Zubereitung</label>
                <input type="text" name="zubereitung" value={zubereitung} onChange={(e)=>setZubereitung(e.target.value)} />
                <input type="buton" value='send' onClick={submitHandler}/>
            </form>
        </div>
    );
};*/

//export default AddRezept;