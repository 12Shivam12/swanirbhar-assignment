import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password ) {
        return res.status(400).json({message: 'All fields are required'});
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({message: 'User alread exist'});
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword,
            username
        })


        await newUser.save();
        res.status(201).json({message: 'signup successful'});
    } catch (error) {
        console.log('error during signup',error);
    }

}

export const login = async () =>{

    const {email, password} = req.body;

    if(!email || !password){
        return res.status(500).json({message: 'All fields required'});
    }

    const existingUser = await User.findOne({email});

    if(!existingUser){
        return res.status(500).json({message: "User not found"});
    }

    const validPassword = bcryptjs.compareSync(password,existingUser.password)
    
    if(!validPassword){
        return res.status(500).json({message: 'Invalid Password'});
    }
}