const express  = require('expresss')
require('dotenv').config();
const app = express();
const port = process.env.PORT||3000;


app.listen(port,(req, res)=>{
  console.log(`Server Runing on port:${port}`)
});