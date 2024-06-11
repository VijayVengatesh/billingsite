const mongoose=require("mongoose")
const bill=mongoose.model("bill",new mongoose.Schema({
    customerName:String,
    dueDate:Date,
    invoice:String,
    invoiceDate:Date,
    orderNumber:String,
    purchaseProducts:Array,
    totalAmount:Number
}))

module.exports=bill