const managerProducts = require("../../model/product");

const searchProduct=async(req,res)=>{
      const query= req.query.search;
      const email= req.query.email
      console.log(query);
      const searchQuery= {
         name:{
            $regex: query,
            $options:'i'
         },
        email:email
      }

       try {
         if (query) {
            const result= await managerProducts.find(searchQuery).lean()
            res.status(200).send(result)
         }
       } catch (error) {
         console.log(error);
       }
}

module.exports=searchProduct