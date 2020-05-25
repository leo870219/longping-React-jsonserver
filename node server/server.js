const path = require('path'); 
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 3000; 
const publicPath = path.join(__dirname,'..','public');
app.use(express.static(publicPath));
app.listen(port,()=> { 
   console.log(`服務器在端口$ {port}!``上已啟動`); 
});