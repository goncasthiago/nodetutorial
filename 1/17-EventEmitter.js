const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//on - listen
//emit - send

customEmitter.on('response', (name, id)=> {
    console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', ()=> {
    console.log(`some other logic here`)
})
//customEmitter.emit('response') //the order matters, we have to listen then emit
customEmitter.emit('response', 'john', 34)

//http Server with on

const http = require('http')

const server = http.createServer()

//emits request event
//subscribe to it / listen for it / respond to it

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5001)