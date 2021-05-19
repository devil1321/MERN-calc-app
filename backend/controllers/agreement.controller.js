let Agreement  = require('../models/agreement')
const get_all_agreements = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Agreement.find()
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
const get_agreement = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Agreement.findById(req.params.id)
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
const post_agreement = (req,res) =>{
    const newAgreement = new Agreement({
        email,
        password,
        imie,
        nazwisko,
        auto,
        region
    })
    newAgreement.save()
    .then(agreement=>{
        res.json({success:'You are now registered and can log in'})
        res.redirect('/users/login')
    })
    .catch(err =>console.log(err))
}
const delete_agreement = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Agreement.findByIdAndDelete(req.params.id)
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
const update_agreement = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Agreement.findById(req.params.id)
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
    get_all_agreements,
    get_agreement,
    post_agreement,
    delete_agreement,
    update_agreement,
}