// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const data = await Task.getAll()
        const newData = data.map(project => {
            return {...project, completed:(project.completed ? true : false)}
        })
        res.status(200).json(newData)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})
router.post('/', async (req, res) => {
    try {
        const data = await Task.add(req.body)
        const newData = {...data, completed:(data.completed ? true : false)}
        res.status(201).json(newData)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})

module.exports = router