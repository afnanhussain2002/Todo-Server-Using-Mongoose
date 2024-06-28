const express = require('express');
const router = express.Router()
const todoSchema = require('../todoSchema/todoSchema')


// Get all the todo

router.get('/', async(req,res) =>{

})

// Get a single todo

router.get('/:id', async(req,res) =>{

})

// Post a todo

router.post('/', async(req,res)=>{

})

// Post multiple todo

router.post('/all', async(req,res) =>{

})

// update todo

router.put('/', async(req,res) =>{

})

// Delete a todo

router.put('/', async(req,res) =>{

})

module.exports = router