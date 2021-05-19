let Invoice  = require('../models/invoice')
const get_all_invoices = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Invoice.find()
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
const get_invoice = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Invoice.findById(req.params.id)
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


const post_invoice = (req,res) =>{
    const newInvoice = new Invoice({
        email,
        password,
        imie,
        nazwisko,
        auto,
        region
    })
    newInvoice.save()
    .then(invoice=>{
        res.json({success:'You are now registered and can log in'})
        res.redirect('/users/login')
    })
    .catch(err =>console.log(err))
}
const delete_invoice = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Invoice.findByIdAndDelete(req.params.id)
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
const update_invoice = (req,res) =>{
    if(req.user !== undefined){
        if(req.user.isActive === true){
            Invoice.findById(req.params.id)
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
    get_all_invoices,
    get_invoice,
    post_invoice,
    delete_invoice,
    update_invoice,
}