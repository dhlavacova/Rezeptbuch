export const notFound=(req, res)=>{
    console.log(req);
    res.status(404).send(`Path ${req.originalUrl} not exist &#128586 &#128584 &#128585`)

}