const findDriver =  (req,res) =>{
    Driver.find()
        .then(driver =>res.json(driver))
        .catch(err=>res.status(400).json('Error: ' + err))
}