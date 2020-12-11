// build your server here
const express = require('express');
const helmet = require('helmet')

// imoprt routers
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express();

// middleware
server.use(express.json());
server.use(helmet)

// use routers with endpoints
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)


module.exports = server