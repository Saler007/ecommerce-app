import { response } from "express";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try{
    const {email, password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
      return res.json({success:false, message: "User doesn't exists"})
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(isMatch){
      const token = createToken(user._id)
      res.json({success: true, token})
      
    }else{
      res.json({sucess:false, message: "Invalid credentials"})
    }

  }catch(error){
    console.log(error)
    res.json({success: false, message: error.message})
  }
};

// Route for user register
const registerUser = async (req, res) => {
  try {
    // request name email and password for register
    const { name, email, password } = req.body;

    // 1. checking user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // 2. validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Pleasae enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Pleasae enter a strong password",
      });
    }

    // 3. hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // 4. Save user to DB
    const user = await newUser.save();

    // 5. Give Token
    const token = createToken(user._id);

    res.json({ sucess: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

  res.json({ msg: "Regiser API Working" });
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    // request email and password for login
    const { email, password } = req.body;

    // 1. checking if email exists
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exists" });
    }

    // 2. checking if password is true
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, massage: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
