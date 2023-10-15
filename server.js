const express=require('express');
const axios=require('axios');
const app=express();
const port=8000;
const API_KEY='X9doKd70W2Gf+YxDj2kJaw==1c71KIvFoPuLzd1D';

// Enable CORS middleware
app.use((err,req,res,next)=>{
    res.header
    ('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
    res.header('X-Content-Type-Options', 'nosniff');
        next();
    console.error(err.stack);
    res.status(500).send('Server Issues');
});
// Define a route to handle API requests
app.get('/api/check', async(req,res)=>{
    try{
        const {q}=req.query;
        const apiUrl=`https://api.api-ninjas.com/v1/animals?name=${q}`;
        await axios
        .get(apiUrl, {
          headers: {
            "X-Api-Key": API_KEY,
          },
          params: {
            name: q,
          },
        })
        .then((response) => {
          // Check if the API response status is 200 (OK) to determine if the input exists
          if (response.status === 200 /* response.data !== "" */) {
            res.send(response.data);
            console.log(`${q} exists in the Animal API.`);
          } else {
            console.log(`${q} does not exist in the Animal API.`);
          }
        }) 
     }
        catch(error) {
          console.error("Error:", error);
          res.status(500).json({error:'The Server Has Issues'})
        }   
});
app.listen(port,()=>{
    console.log(`Proxy server is running on port ${port}`);
});
