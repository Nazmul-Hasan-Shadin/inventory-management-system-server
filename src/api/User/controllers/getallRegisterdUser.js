const UsersData = require("../../../model/users");

const getAllRegisterdUser=async(req,res)=>{
    try {
        const result = await UsersData.find()

        console.log(result, 'all users');
        res.json({ success: true, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }


} 

module.exports=getAllRegisterdUser
