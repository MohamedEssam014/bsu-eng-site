const express = require('express')
const cors = require('cors')
const newsRouter = require('./routes/news')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/news', newsRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log('API listening on', PORT))
