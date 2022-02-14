const express = require('express')
const router =express.Router()
const Hourly=require('../model/hrs.js')
const {ObjectId} = require('mongoose').Types



router.post('/',async(req,res)=>{ //getting posted data from client'
    try{
        console.log(req.body)
    const act=new Hourly({
        // time:req.body.time,
        activity:req.body.work, 
        place:req.body.place
    })
    
        const b1=await act.save()//saving in database
        res.json(b1)
    }catch(err){
        
        res.send('Error'+err)
    }
    
})

router.get('/',async(req,res)=>{

   try{

   const act=await Hourly.find()
    res.json(act)
    
   }
   catch(err){
       res.send("error"+err)

   }
})

router.get('/:id',async(req,res)=>{

    try{
        const act= await Hourly.findById(req.params.id)
        res.json(act)
    }
    catch(err){
        res.send("error"+err)
 
    }

})

router.patch('/:id',async(req,res)=>{

    try{
        const act= await Hourly.findById(req.params.id)
         act.activity=req.body.activity
         const b1 = await act.save()
        res.json(b1)
        
    }
    catch(err){
        res.send("error"+err)
 
    }

})

router.delete('/:id',async(req,res)=>{
console.log(req.params.id)
    const id = ObjectId(req.params.id)

    if(await Hourly.findById(id)){

    try{
    const act = await Hourly.findById(id)
   await act.delete()
    res.send("event deleted with id"+id)
    console.log("yes deleted")
    }
    catch(err)
    {
        res.send("error"+err)
    }
}
else{res.send("no data of id"+id)}
})


router.delete('/',async(req,res)=>{

    if(await Hourly.findById(req.body.activity)==true){
    try{
    const act = await Hourly.findById(req.body.activity)
   await act.delete()
    res.send("event deleted with time"+req.body.activity)
    }
    catch(err)
    {
        res.send("error"+err)
    }}
    else{
        res.send("no data at time"+req.body.activity)
    }

})



module.exports=router