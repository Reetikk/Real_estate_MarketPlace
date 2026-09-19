import mongoose from 'mongoose';
const schema=new mongoose.Schema({participants:[{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}],property:{type:mongoose.Schema.Types.ObjectId,ref:'Property',required:true},lastMessage:{type:String,default:''}},{timestamps:true});
schema.index({participants:1,property:1}); export default mongoose.model('Conversation',schema);
