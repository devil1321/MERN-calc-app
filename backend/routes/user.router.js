const router = require('express').Router()
const {ensureAuthenticated}  = require('../config/auth')
const passport = require('passport')
const bcrypt = require('bcryptjs')
let User  = require('../models/user')


router.route('/register').post((req,res) => {
    const {email,password,password2,imie,nazwisko,auto,region} = req.body
   let errors = []
    // heck required fields
    if( !email || !password || !password || !imie || !nazwisko || auto === "" || !region){
        errors.push({msg:"Please fill all fields"})
    }
    // check passwords match
    if(password !== password2){
        errors.push({msg:"Passwords do not match"})
    }
    // check to pass length
    if(password.length < 6){
        errors.push({msg:"Password should be at least characters"})
    }
    if(errors.length > 0){
        res.json(errors)
    }else{
        // validation pass
        User.findOne({email:email})
            .then(user=>{
                if(user){
                    // user exists
                    errors.push({msg:"Email is already registered"})
                    res.json(errors)
                }else{
                    const newUser = new User({
                        email,
                        password,
                        imie,
                        nazwisko,
                        auto,
                        region
                    })
                //   hash password
                bcrypt.genSalt(10,(err,salt)=>bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    // if(err) throw err
                    // set password to hashed
                    newUser.password = hash
                    // save user
                    newUser.save()
                        .then(user=>{
                            res.json({success:'You are now registered and can log in'})
                            res.redirect('/users/login')
                        })
                        .catch(err =>console.log(err))
                }))
                }
            })
    }
})
router.post('/login',(req,res,next)=>{
    User.findOne({email:req.body.email})
        .then(user => {
            let page = 'dashboard'
            if(user.isAdmin === true){
                page = 'admin'   
            }
            passport.authenticate('local',{
                successRedirect:`/users/${page}`,
                failureRedirect:'/',
            })(req,res,next)
        })
   
})
// logout
router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
})
router.get('/get',(req,res)=>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            res.send('get')
        }else{
            res.redirect('/')
        }
    }else{
        res.redirect('/')
        req.logout()
    }
})
router.get('/dashboard',ensureAuthenticated, (req,res) =>{
    if(req.user !== undefined) {
        if(req.user.isActive === true){
            if(req.user.isAdmin === false){
                res.send('dashboard')
            }else{
                res.redirect('/users/admin')
            }
        }else{
            req.logout()
            res.redirect('/')
        }
    }else{
        req.logout()
        res.redirect('/')
    }
    // User.find()
    // .then(user =>res.json(user))
    // .catch(err=>res.status(400).json('Error: ' + err))
})
router.get('/admin',ensureAuthenticated, (req,res) =>{
    if(req.user !== undefined) {
        if(req.user.isActive === true){
            if(req.user.isAdmin === true){
                res.send('admin')
            }else{
                res.redirect('/users/dashboard')
            }
        }else{
            req.logout()
            res.redirect('/')
        }
    }else{
        req.logout()
        res.redirect('/')
    }
    // User.find()
    // .then(user =>res.json(user))
    // .catch(err=>res.status(400).json('Error: ' + err))
})

router.get('/all/:id',ensureAuthenticated, (req,res) =>{
    User.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json("Error: " + err))
})

router.delete('/delete/:id',ensureAuthenticated, (req,res) =>{
    User.findByIdAndDelete(req.params.id)
    .then(user=>res.json('Exercise deleted'))
    .catch(err=>res.status(400).json("Error: " + err))
})

router.post('/update/:id', ensureAuthenticated, (req,res) =>{
    User.findById(req.params.id)
        .then(user=>{
            // exercise.username = req.body.username
            // exercise.description = req.body.description
            // exercise.duration = Number(req.body.duration)
            // exercise.date = Date.parse(req.body.date)

            user.save()
            .then(()=>{res.json('Exercise updated!')})
            .catch(err=>res.status(400).json('Error: ' + err))
        })
})

module.exports = router 