let Settlement  = require('../models/settlement')
const get_all_settlements = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Settlement.find()
            .then(user=>res.json(user))
            .catch(err=>res.status(400).json("Error: " + err))
        }
        else{
            res.redirect('/')
        }
    }else{
        res.redirect('/')
        req.logout()
    }
}
const get_settlement = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Settlement.findById(req.params.id)
            .then(user=>res.json(user))
            .catch(err=>res.status(400).json("Error: " + err))
        }
        else{
            res.redirect('/')
        }
    }else{
        res.redirect('/')
        req.logout()
    }
}

const post_settlement = (req,res) =>{
    const newSettlement = new Settlement({
        email,
        password,
        imie,
        nazwisko,
        auto,
        region
    })
    newSettlement.save()
    .then(settlement=>{
        res.json({success:'You are now registered and can log in'})
        res.redirect('/users/login')
    })
    .catch(err =>console.log(err))
}
const delete_settlement = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Settlement.findByIdAndDelete(req.params.id)
            .then(user=>res.json('Exercise deleted'))
            .catch(err=>res.status(400).json("Error: " + err))
        } 
        else{
            res.redirect('/')
        }
    }else{
        res.redirect('/')
        req.logout()
    }
}
const update_settlement = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Settlement.findById(req.params.id)
            .then(user=>{
            // exercise.username = req.body.username
            // exercise.description = req.body.description
            // exercise.duration = Number(req.body.duration)
            // exercise.date = Date.parse(req.body.date)

            user.save()
            .then(()=>{res.json('Exercise updated!')})
            .catch(err=>res.status(400).json('Error: ' + err))
        })
        } 
        else{
            res.redirect('/')
        }
    }else{
        res.redirect('/')
        req.logout()
    }
   
}

module.exports = {
    get_all_settlements,
    get_settlement,
    post_settlement,
    delete_settlement,
    update_settlement,
}