const express = require('express')
const res = require('express/lib/response')
const logger = require('./logger')
const authorize = require('./authorize')
const app = express()

//in express, everything goes in order, so we have to use the middleware at the top
//app.use('/api',logger) //use just on /api
//app.use([authorize,logger])

//express middleware
//app.use expect middlewares
//app.use(express.static('./navbar-app'))

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/api/v1/items',[authorize, logger], (req,res)=>{
    console.log(req.user)
    res.status(200).json({id: 1, name: "Teste"})
})

app.listen(5005, ()=>{
    console.log('Server is running un port 5005...')
})