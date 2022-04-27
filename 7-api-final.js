const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')
//to do post requests
app.use(express.static('./02-express-tutorial/methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

//import external api
app.use('/api/people',people )
app.use('/login', auth)

app.listen(5006, ()=>{
    console.log("Server running on port 5006...")
})