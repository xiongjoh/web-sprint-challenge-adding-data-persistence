// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const data = await Resource.getAll()
        res.status(200).json(data)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})
router.post('/', async (req, res) => {
    try {
        const data = await Resource.add(req.body)
        res.status(201).json(data)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})

module.exports = router