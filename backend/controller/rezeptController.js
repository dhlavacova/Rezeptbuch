import db from '../dbConfig.js'
import {v4 as uuid} from 'uuid'
export const getAllRezepten=async (req,res)=>{
    await db.read()
    res.send(db.data)
}
export const newRezept= async(req,res)=>{
let rezept = req.body;
//console.log("rezept", rezept)
rezept.id= uuid();
 await db.data.push(rezept);
    db.write()
    res.send(db.data)
}
export const deleteRezept=async (req,res)=>{
    const id=req.params.id;
    await db.read()
    const deleteItem=await db.data.filter(item=>item.id!==id)
    db.data=deleteItem
    db.write()
    res.send(db.data)
}