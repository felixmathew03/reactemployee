import employSchema from './models/employ.model.js';
export async function addEmp(req,res){
    try{
        const {...employ}=req.body;
        const data=await employSchema.create({...employ});
        return res.status(201).send({msg:"added"});
    }catch(error){
        res.status(404).send({msg:"error"})
    }
}
export async function getEmployees(req,res) {
    try {
        const employees=await employSchema.find();
        res.status(200).send(employees)
        
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}

export async function getEmploy(req,res) {
    try {
        const {id}=req.params
        const data=await employSchema.findOne({_id:id});
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}
export async function editEmploy(req,res) {
    try {
        const {_id}=req.params;
    const {...employ}=req.body;
    const data=await employSchema.updateOne({_id},{$set:{...employ}});
    res.status(201).send({msg:"updated"});
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
    
}
export async function deleteEmploy(req,res) {
    try {
         const {_id}=req.params;
         console.log(_id);
         
        const data=await employSchema.deleteOne({_id})
        res.status(201).send({msg:"error"});
    } catch (error) {
        res.status(404).send({msg:"error"})
    }   
}
