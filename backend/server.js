  
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')

const userRoute = require('./routes/user.router')
const fakturyRoute = require('./routes/invoice.router')
const rozliczeniaRoute = require('./routes/settlement.router')
const umowyRoute = require('./routes/agreement.router')


require('dotenv').config()

require('./config/passport')(passport)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true })
const connection = mongoose.connection

app.use(express.urlencoded({
    extendend:false
}))
// express sessions
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }))
// passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req,res)=>{
    res.send('Home')
})

app.use('/users',userRoute)
app.get('/faktury',fakturyRoute)
app.get('/rozliczenia',rozliczeniaRoute)
app.get('/umowy',umowyRoute)


// app.use((req,res)=>{
//     res.status(404).send('<h1>404</h1>')
// })

connection.once('open',()=>{
    console.log('MongoDB connection established successfully')
})

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})