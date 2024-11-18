import mongoose, { mongo } from "mongoose";

const employSchema=new mongoose.Schema({
    name:{type:String},
    salary:{type:Number},
    dob:{type:String},
    experience:{type:String},
    designation:{type:String},
    phone:{type:Number},
    email:{type:String},
    place:{type:String},
    profile:{type:String}
});
export default mongoose.model.Employs||mongoose.model("Employ",employSchema);