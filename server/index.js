require('dotenv').config() // импорт конфиг файла .env
const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/models')
const cors = require('cors')
const FileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 6000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(FileUpload({}))
app.use('/api', router)

app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер запущен на порте: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
