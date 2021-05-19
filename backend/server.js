  
const express = require('express')
const router = require('express').Router()
const cors = require('cors')
const mongoose = require('mongoose')
const Driver = require('./models/driver')
const Faktury = require('./models/faktury')
const Rozliczenia = require('./models/rozliczenia')

require('dotenv').config()


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true })
const connection = mongoose.connection


app.post('/', (req,res)=>{
    const driver = new Driver({name:"Driver"})
    driver.save()
        .then(()=>res.json('Exercise added !')) 
        .catch(err=>res.status(400).json('Error: ' + err))
})

app.post('/update/:id', (req,res)=>{
    Driver.findById(req.params.id)
        .then(driver=>{
            driver.email = 'new value 2'
            driver.save()
                .then(()=>{res.json('Exercise updated!')})
                .catch(err=>res.status(400).json('Error: ' + err))
        })
})
app.get('/user/:id', (req,res)=>{
    Driver.findById(req.params.id)
        .then(driver => res.send(driver.name))
        .catch(err=>res.status(400).json('Error: ' + err))
   
})
connection.once('open',()=>{
    console.log('MongoDB connection established successfully')
})

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})