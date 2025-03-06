const usermodel = require("../models/user");
// const express = require("express");
// const router = express.Router();

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await new usermodel({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error in creating user", error: error.message });
  }
};
const fetchdata = async (req,res)=>{
    try {
        const user  = await usermodel.find()
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({ message: "Error in fetching data", error: error.messag})


        
        
    }
}
const deleteUser = async (req, res) => {
  try {
      const deletedUser = await usermodel.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
          return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
      res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { register ,fetchdata, deleteUser};