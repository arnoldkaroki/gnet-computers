require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const { errorHandler } = require('./utils/errorHandler');
const cors = require('cors');
const Product = require('./model/product');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json({extended: false }));
app.use(cors())

app.get('/', (req, res) => res.send('API Running'));

connectDB();


 app.use('/api/products', productRoutes);
 app.use('/api/users', userRoutes);


app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Api hit successfully" })

})

app.get('/products', async (req, res) => {
    const products = await Product.find()
    if (products.length > 0) {
        res.status(200).json(products)
    } else {
        res.status(404).json("Products not found")
    }

})

app.post('/new-product', async(req, res) => {
    const { name,
        price,
        description,
        stock } = req.body

        console.log(description)

        if(!price || !name || !stock || !description){
            res.status(400).json({message:"Please provide required fields"})
        }

        const newProduct = await Product.create({
            name,
            price,
            stock,
            description
        })

        console.log(newProduct)

    res.status(201).json("Product created!")
})

app.delete('/product/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const deletedProduct = await Product.findByIdAndDelete(id)

        if(!deletedProduct){
            res.status(404).json({message:"Product not found"})
        }
    
        res.status(200).json({message:"Product deleted"})
    } catch (error) {

        res.status(500).json({error:error})
        
    }
   
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});