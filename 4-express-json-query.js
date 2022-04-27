const express = require('express')
const req = require('express/lib/request')
const app = express()
const {products} = require('./data')

app.get('/', (req,res)=>{
    res.send('<h1> Home Page</h1><a href="/api/product">Products</a>')
})

app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
    const {id,name,image} = product;
    return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/v1/products/:productID', (req,res)=>{
    //console.log(req)
    //console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find( (product) => product.id === Number(productID))
    if (!singleProduct){
        return res.status(404).send({success: false, data: [], msg: 'Product Does Not Exist'})
    }
    res.status(200).json({ success: true, data: singleProduct})
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params)
    const { productID, reviewID} = req.params
    res.send('Product: ' + productID + ` `+ reviewID)
})

app.get('/api/products-all', (req,res)=>{
    res.json(products)
})
app.get('/api/v1/query', (req,res)=>{
    console.log(req.query)
    //res.json(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter( (product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length < 1 ){
        //return res.status(200).send('No product matched your search')
        return res.status(200).json({success:true, data: []})
    } 

    res.status(200).json({success: true, data: sortedProducts})
})
app.listen(5003, ()=>{
    console.log('Server is listening on port 5003...')
})