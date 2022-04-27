const express = require('express')

const app = express()

//req => middlewre => res
//we do some functionality then send the response

const logger = (req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date()//.getFullYear
    console.log(method,url,time)
    next()

}


app.get('/', logger, (req,res)=>{
    res.send('Home')
})

app.get('/about',logger, (req,res)=>{
    res.send('About')
})

app.listen(5004, ()=> {
    console.log('Server is listening on port 5004...')
})