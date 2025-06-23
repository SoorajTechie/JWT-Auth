
const bcrypt = require("bcrypt");


const User = require("../model/User")

//REGISTER

const Register = async(req,res) =>{
    
    try {

        const {name,email,username,password} = req.body;

        const UserExist = await User.findOne({email});

        if(UserExist)
        {
            return res.status(400).json({message:"Email already exist"});

        }
        //hash the password

        const hashedpassword = await bcrypt.hash(password,10);

        const newUser = new User({
                name,
                email,
                username,
                password:hashedpassword,
                
        });

        await newUser.save();

        res.status(200).json({message:"registred successfully"});

        
    } catch (error) {
        res.status(500).json({message:"Failed"});
    }
}

module.exports = {Register}