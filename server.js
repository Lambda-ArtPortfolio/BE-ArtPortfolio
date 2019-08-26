const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authenticate = require('./auth/auth-middleware.js')
const authRouter = require('./auth/auth-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/auth', authRouter)
server.use('/', authRouter)

// server.get('/', (req, res) => {
//     res.status(200).json({ message: 'Hello you are up and running!' })
// })

module.exports = server