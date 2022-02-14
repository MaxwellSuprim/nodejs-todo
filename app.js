require('./dbConnection.js')
const cors = require('cors')
const express = require('express')
const app = express()

var corsOptions = {
    origin:'*', 
               //access-control-allow-credentials:true
    optionSuccessStatus:200
  }
  
app.use(cors(corsOptions))

app.use(express.json())
const Activity=require('./routing/aActivity.js')


app.use('/work',Activity)


app.listen(4000,function(){

    console.log("server connected....")
    })
