const UsersData = require("../../model/users")

const totalIncomeOfAdmin= async(req,res)=>{
      const query= {email:"nazmulhasanshadin000@gmail.com"}

    try {
        const result= await UsersData.findOne(query)
        
        
  
         res.json({data:result.income})

    } catch (error) {
        
    }

}

module.exports=totalIncomeOfAdmin