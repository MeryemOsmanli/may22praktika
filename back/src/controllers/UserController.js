import { May22Blog } from "../models/UserModel.js"

export const userGetAll= async (req, res) => {
    const getAll = await May22Blog.find()
    res.send(getAll)
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


export const userGetByIdAndSignin= async (req, res) => {
    const {email,password} = req.body
    const hashedPassword= await bcrypt.hash(password,10)
    const getAdd = new May22Blog({email,password:hashedPassword})
    await getAdd.save()
    res.send(getAdd)
}
export const userGetByIdAndLogin= async (req, res) => {
    const {email,password} = req.body
    const user= await May22Blog.findOne({email:email})
    if (!user) {
        return   res.send("not fount")
    }
    const isPasswordRight = await bcrypt.compare(password, user.password)
    if (!isPasswordRight) {
        return res.send("sehv parol")
        
    }
    return res.send("xos login")


}