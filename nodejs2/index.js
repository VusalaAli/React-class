const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())


// let fakeDB = [
//     {
//     "id": 2,
//     "description": "Sweet and savory sauces relishes spreads and seasonings",
//     "name": "Condiments"
//     },
//     {
//     "id": 1,
//     "description": "Soft drinks coffees teas beers and ales",
//     "name": "Beverages"
//     },
//     {
//     "id": 3,
//     "description": "Desserts candies and sweet breads",
//     "name": "Confections"
//     },
//     {
//     "id": 4,
//     "description": "Cheeses",
//     "name": "Dairy Products"
//     },
//     {
//     "id": 5,
//     "description": "Breads crackers pasta and cereal",
//     "name": "Grains/Cereals"
//     },
//     {
//     "id": 6,
//     "description": "Prepared meats",
//     "name": "Meat/Poultry"
//     },
//     {
//     "id": 7,
//     "description": "Dried fruit and bean curd",
//     "name": "Produce"
//     },
//     {
//     "id": 8,
//     "description": "Seaweed and fish",
//     "name": "Seafood"
//     }
//     ]

// app.get('/users', (req, res) => {
//     res.send(fakeDB)
//   })

// app.get('/users/:id', (req, res) => {
//     const {id} = req.params
//     res.send("get" +id)

//     const element = fakeDB.find(x=> x.id=== +id)
//     res.send(element)
//   })
  
//   app.post('/users', (req, res) => {
//     fakeDB.push(req.body)
//     res.send("post")
//   })
  
//   app.put('/users', (req, res) => {
//     res.send("put")
//   })
  
//   app.delete('/users/:id', (req, res) => {
//     const {id} = req.params
//     fakeDB = fakeDB.filter(x=> x.id !== +id)
//     res.send("deleted")
//   })

const immigrationSchema = new mongoose.Schema({
    image:String,
    name:String,
    country:String,
    description:String,
})
const immigrationModel = mongoose.model("requirement", immigrationSchema)


app.get("/requirements", async (req,res)=>{
    let categories = await immigrationModel.find()
    res.send(categories)
 })
 
 
 app.get("/requirements/:id", async (req,res)=>{
     let id= req.params.id
   let category= await immigrationModel.findById(id)
   res.send(category)
 })
 
 
 app.delete("/requirements/:id", async (req,res)=>{
     let id=req.params.id
    await immigrationModel.findByIdAndDelete(id)
    res.send("Success Delete")
 })
 
 app.post("/requirements", async  (req,res)=>{
     let newCategory= immigrationModel(req.body)
     await newCategory.save()
     res.send("success post")
 })
 
 
 app.put("/requirements/:id",async (req,res)=>{
     let id=req.params.id
     let updateCategory=req.body
    await immigrationModel.findByIdAndUpdate({_id:id},updateCategory)
    res.send("success update")
 })
 


app.listen(port, ()=> {
    console.log("dinlenilir...");
}) 


mongoose.connect("mongodb+srv://vusalavabp109:vusala2067@cluster1.hnuw6.mongodb.net/")
.then(()=> {
    console.log("connected");
})
.catch((err)=>{         
    console.log(err);
})
