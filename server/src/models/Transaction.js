import mongoose from 'mongoose';
const schema=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},property:{type:mongoose.Schema.Types.ObjectId,ref:'Property',required:true},amount:{type:Number,required:true,min:1},type:{type:String,enum:['booking','deposit'],default:'booking'},status:{type:String,enum:['created','paid','failed'],default:'created'},razorpayOrderId:String,razorpayPaymentId:String},{timestamps:true});
export default mongoose.model('Transaction',schema);
