import mongoose from "mongoose";
const candidateSchema = new mongoose.Schema({
  name:{type:String,required:true,trim:true,minlength:2},
  email:{type:String,required:true,unique:true,trim:true,lowercase:true},
  phone:{type:String,trim:true},
  skills:{type:[String],default:[]},
  experience:{type:Number,min:0,default:0},
  status:{type:String,enum:["Available","Interviewing","Hired","Rejected"],default:"Available"}
},{timestamps:true});
export default mongoose.model("Candidate",candidateSchema);