import express from 'express';
import {getAllRezepten,deleteRezept,newRezept} from "./controller/rezeptController.js";
import {notFound} from "./controller/generalController.js";
import cors from "cors";


const app = express();
const PORT=3000;
app.use(express.json());
app.use(cors());

app.get('/rezepten',getAllRezepten)
app.post('/rezept/neu_rezept',newRezept)
app.delete('/rezepten/:id',deleteRezept)
app.use("*",notFound)
app.listen( PORT,() => {
            console.log(` server bezi na portu:${PORT}`);
})
