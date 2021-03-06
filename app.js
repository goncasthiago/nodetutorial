const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()

const port = 5007

app.use(express.json())
//app.use(express.urlencoded({extended:false}))

//rotas
const Materias = require('./routes/materias')


//lista de apis
app.use('/api/v1/materias',Materias)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is running on port ${port}...`))
        
    } catch (error) {
        console.log(error)
    }
}

start()
