const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    console.log('The user hit the resource')
    res.send('Home Page')
})

app.get('/about', (req,res)=>{
    res.send('About Page')
})

app.all('*', (req,res)=> {
    res.status(404).send('<h1> Resource not found</h1>')
})

app.listen(5002, ()=>{
    console.log('The server is listening on port 5002')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen