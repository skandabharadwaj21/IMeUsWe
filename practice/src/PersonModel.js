const express = require('express')
const mongoose = require('mongoose')
const Person = require('./PersonSchema')
const app = express()
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.post("/createPerson", async function (req, res) {
    try {
      const pInfo = await Person.create(req.body);
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json(pInfo);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/fetchDetails", async function(req, res){
    try{
      const {id} = req.query
      if(!id){
        return res.status(500).json({message:"Id is required"});
      }
      const getPerson = await Person.findById(id)
      if(!getPerson){
        return res.status(404).json({message:"Person with this id not found"})
      }
      res.status(200).json(getPerson)
    }
    catch(error){
      console.log(error.message);
      res.status(500).json({message:error.message});
    }
  });

  mongoose
  .connect("mongodb://localhost:27017/personDB")
  .then(function () {
    app.listen(5000, function () {
      console.log("Node Api running sucessfully ");
    });
    console.log("mongoose connected");
  })
  .catch(function (err) {
    console.log(err);
  });