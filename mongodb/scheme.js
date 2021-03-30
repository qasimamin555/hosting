const mongoose=require('mongoose')
const modal=mongoose.Schema;

   const UserSchema=new modal({
     name:String,
   })
  
   const User = mongoose.model('qasims', UserSchema);
    module.exports=User;
   