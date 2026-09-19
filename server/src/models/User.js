import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({name:{type:String,required:true,trim:true,minlength:2,maxlength:80},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true,select:false,minlength:8},phone:{type:String,trim:true},role:{type:String,enum:['buyer','agent','admin'],default:'buyer'}},{timestamps:true});
export default mongoose.model('User',userSchema);
