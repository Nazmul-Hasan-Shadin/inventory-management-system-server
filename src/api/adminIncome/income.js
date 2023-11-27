const UsersData = require("../../model/users");


const income = async (req, res) => {
    const fixedEmail = "nazmulhasanshadin000@gmail.com";

    try {
        const result = await UsersData.findOne({ email: fixedEmail });

        if (result) {
            console.log('User found:', result);

            
            result.income += 10;

       
            await result.save();

            console.log('Admin income updated:', result.income);

 
            res.json({ success: true, data: result });
        } else {
            console.log('User not found');
          
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error:', error);
       
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = income;
