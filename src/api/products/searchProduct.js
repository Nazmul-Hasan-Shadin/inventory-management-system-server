const managerProducts = require("../../model/product");
const UsersShop = require("../../model/usersShop");

const searchProduct=async(req,res)=>{
      const query= req.query.search;
      const email= req.query.email;
      const userType= req.query.userType

      console.log(userType,'iama admin search');

      const searchQuery= {
         name:{
            $regex: query,
            $options:'i'
         },
        email:email
      }


      const searchQueryAdmin= {
        name:{
           $regex: query,
           $options:'i'
        },
      
     }


       try {
          //  search all users for admin
         if (userType==='admin') {
          const result= await UsersShop.find(searchQueryAdmin).lean()
          res.status(200).send(result)
         }
            //   for manager
        else if (query) {
            const result= await managerProducts.find(searchQuery).lean()
            res.status(200).send(result)
         }
       } catch (error) {
         console.log(error);
       }
}

module.exports=searchProduct