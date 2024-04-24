import mongoose from 'mongoose'
import cors from 'cors';
import express from 'express';
const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://ruffy92:yeTVPLkwskawU2tK@zoranwebshop.d1s9vxm.mongodb.net/store')

const UserSchema = new mongoose.Schema({
         name : String
})
const UserModel = mongoose.model("users",UserSchema)

app.get("/getStore",(req,res)=>{
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        console.log(err)
    })
})
app.listen(3001,() =>{
    console.log("hey")
})