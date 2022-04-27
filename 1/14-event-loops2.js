/*
console.log('first')
setTimeout( ()=> {
    console.log('second')
}, 0 )
console.log('third')
*/

/*
setInterval(() => {
    console.log(`a1`)
},1000)
console.log('I will run first')

// process stays alive unless kill process w control + C
*/

const http = require('http')

const server = http.createServer( (req,res)=>{
    console.log('request event')
    res.end('Welcome to our home page')
})

server.listen(5001, () => {
    console.log('Server listening on port : 5001')
})