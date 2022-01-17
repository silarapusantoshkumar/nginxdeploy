const express = require('express');
const mongoose = require("mongoose")
const cors = require('cors')
const app = express();
const dotenv = require('dotenv')

// production for build 

// app.use(express.static('public'))

require('dotenv').config()

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT|| 5000
// const url = 
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>{
    console.log("we have a new connection")
}).catch((err)=>{
    console.log(err)
})
require('./models/index')
require("./models/posts")
const router = app.use(require("./routing/router"))

// production (connecting the buid to backend)


// incase client replace build with client in the below dline 

// app.use(express.static('client')) 
// const path = require ('path');
// const { connected } = require('process');
// app.get('*',(req,res) => {
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     console.log("production connected")
// })



// running the port

router.listen(PORT,(req,res)=>{
    console.log(`server running at port ${PORT}`)
})