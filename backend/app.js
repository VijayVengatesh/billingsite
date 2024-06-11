const express=require('express');
const cors=require('cors');
const { default: mongoose } = require('mongoose');
const bill = require('./model/billingModel');
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("./public"))
app.use(cors())
app.post("/insert",async(req,res)=>{
    console.log(req.body)
        const b=new bill(req.body);
        await b.save()
        .then((result=>{
            res.send(result).status(200)
        }))
        .catch((err=>{
            res.send(err);
        }))
        // bill.save(req.body).then((result)=>{res.status(200).send(result)}).catch((err)=>{res.status(200).send(err)})
    

})

mongoose.connect("mongodb://localhost:27017/userandproducts")
.then(()=>{
    console.log("db connected successfully")
})
.catch((err)=>{
    console.log("db failed successfully",err)
})
app.listen(5000,()=>{
    console.log("server listening on 5000")
})