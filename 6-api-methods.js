const { app } = require('express')
const express = require('express')
let {people} = require('./data')
let id = 5
const app = express()
//to do post requests
app.use(express.static('./02-express-tutorial/methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

app.post('/login', (req,res)=>{
    //console.log(req.body)
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.get('/api/people', (req,res)=>{
    res.status(200).json({ success:true, data: people})
})

app.post('/api/people', (req,res)=>{
    //console.log(req.body)
    const {name} = req.body
     //don't need the next two lines, just to add the name on people array
     id += 1
     people = [...people, { id, name}]
    
     if(!name){
        return res.status(400).json({success: false, data: [], msg:'please provide name value'})
    }
    res.status(201).json({success:true, person:name})
})

app.post('/api/people/people',(req,res)=> {
    const { name } = req.body
    id += 1
     people = [...people, { id, name}]
    if(!name){
        res.status(400).json({success:false,data: [], msg:"please provide name value"})
    }
    res.status(201).json({success:true, data:[people], msg: ""})
})


app.put('/api/people/:id', (req,res)=> {
    const {id} = req.params;
    const {name} = req.body;
    let changed = false

    if (!name){
        return res.status(400).json({success: false, data: [], msg: 'Please provide name value'})
    }
    people = people.map( (one)=> {
        if (one.id === Number(id)){
            one.name = name
            changed = true
        }
        return one

    })
    if(!changed){
        return res.status(404).json({success: false, data: [], msg: `Id ${id} not found`})
    }

    res.status(200).json({success: true, data:people, msg:""})

})

app.delete('/api/people/:id', (req,res)=>{
    const {id} = req.params
    const person = people.find((one)=> one.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, data: [], msg: `Id ${id} not found`})
    }

    let newPeople = people.filter( (one)=>!(one.id === Number(id)))
    res.status(200).json({success:true, data: newPeople, msg:""})
})

app.listen(5006,()=>{
    console.log('Server listening on port 5006')
})