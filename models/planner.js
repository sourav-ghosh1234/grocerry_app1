const mongoose=require('mongoose')
const plannerSchema=new mongoose.Schema({
    groceryItem:String,
    isPurchased:Boolean
    
})

module.exports = mongoose.model("Plan", plannerSchema);