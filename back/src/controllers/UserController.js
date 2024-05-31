import { May22Blog } from "../models/UserModel.js"
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken"
const tokenKey="salam1243"

export const userGetAll= async (req, res) => {
  try {
    const token=req.headers.authorization
    const decoded= jwt.verify(token,tokenKey)
    if (decoded.role==="Admin") {
        const user=await May22Blog.find()
        return res.send(user)
        
    }
    res.status(401).json({message:"you dont have permisson"})
  } catch (error) {
    res.status(403).json({message:"token is not valid"})
    
  }

    // const getAll = await May22Blog.find()
    // res.send(getAll)
}

export const userGetByIdAndSignin= async (req, res) => {
    const {email,password} = req.body
    const hashedPassword= await bcrypt.hash(password,10)
    const user = new May22Blog({email:email,password:hashedPassword})
    await user.save()
    res.send(user)
}
export const userGetByIdAndLogin= async (req, res) => {
    const {email,password} = req.body
    const user= await May22Blog.findOne({email:email})
    if (!user) {
        return   res.status(404).send("please enter your email")
    }
    const isPasswordRight = await bcrypt.compare(password, user.password)
    if (!isPasswordRight) {
        return res.status(403).send("sehv parol")
        
    }
    const token= jwt.sign({id:user._id,email:user.email,role:user.role},tokenKey)
     res.status(200).json({accessToken:token})


}
export const userGetById=  async (req, res) => {
    const { id } = req.params
    const getbyId = await May22Blog.findById(id)
    res.send(getbyId)
}
export const userGetByIdAndDelete= async (req, res) => {
    const { id } = req.params
    const getDelete = await May22Blog.findByIdAndDelete(id)
    res.send(getDelete)
}