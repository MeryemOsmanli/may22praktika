import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
app.use(cors())
app.use(express.json())

const May22Schema = new mongoose.Schema({
    image: String,
    title: String,
    price: Number
});

const May22Blog = mongoose.model('May22', May22Schema);

app.get('/meryem/', async (req, res) => {
    const getAll = await May22Blog.find()
    res.send(getAll)
})
app.get('/meryem/:id', async (req, res) => {
    const { id } = req.params
    const getbyId = await May22Blog.findById(id)
    res.send(getbyId)
})
app.delete('/meryem/:id', async (req, res) => {
    const { id } = req.params
    const getDelete = await May22Blog.findByIdAndDelete(id)
    res.send(getDelete)
})
app.post('/meryem/', async (req, res) => {
    const obj = req.body
    const getAdd = new May22Blog(obj)
    await getAdd.save()
    res.send(getAdd)
})


mongoose.connect('mongodb+srv://meryemosmanova24:meryemosmanova24@codem.0uejvk1.mongodb.net/')
    .then(() => console.log('Connected!'));
app.listen(3000)