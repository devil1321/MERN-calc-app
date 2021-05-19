  
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true })
const connection = mongoose.connection

app.get('/', (req,res)=>{
    res.redirect('/login')
})
app.get('/login', (req,res)=>{
    res.send('<h1>main<h1>')
})
app.get('/register',(req,res)=>{
    res.send('logged')
})
app.get('/logged',(req,res)=>{
    res.send('logged')
})
app.get('/admin',(req,res)=>{
    res.send('admin')
})
app.get('/faktury',(req,res)=>{
    res.send('faktury')
})
app.get('/rozliczenia',(req,res)=>{
    res.send('rozliczenia')
})
app.get('/umowy',(req,res)=>{
    res.send('umowy')
})
app.get('/skan',(req,res)=>{
    res.send('skan')
})
app.use((req,res)=>{
    res.status(404).send('<h1>404</h1>')
})

connection.once('open',()=>{
    console.log('MongoDB connection established successfully')
})

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})