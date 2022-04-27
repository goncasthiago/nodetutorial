const express = require('express')
const res = require('express/lib/response')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./navbar-app'))

//app.get('/', (req,res)=>{
//    //console.log(__dirname)
//    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html')) 
//    adding to static files
//})

app.all('*', (req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5002, ()=>{
    console.log('Server is listening on port 5002...')
})