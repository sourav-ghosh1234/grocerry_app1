const express=require('express')
const router=express();
const Plan=require('../models/planner')


router.post('/add',async(req,res)=>{
    const plan=new Plan(req.body)
    const result=await plan.save();
    if(result){
        return res.send({"result":"Success"})
    }else{
        return res.status(422).send("some error occured")
    }

})


router.get('/getall',async(req,res)=>{
    const plan=await Plan.find()
    
    if(plan){
        return res.send(plan)
    }else{
        return res.status(422).send("some error occured")
    }

})

router.put('/updatepurchasestatus',async(req,res)=>{
    const plan=await Plan.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    if(plan){
        return res.send({"result":"Success"})
    }else{
        return res.status(422).send("some error occured")
    }

})

router.delete('/deletegroceritem/:id',async(req,res)=>{
    console.log(req.params.id)
    const plan=await Plan.deleteOne({_id:req.params.id})
    console.log(plan)
    if(plan){
        return res.send({"result":"Success"})
    }else{
        return res.status(422).send("some error occured")
    }

})







module.exports=router
