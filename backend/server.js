const express =  require('express')
const colors = require('colors')
const dotEnv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()



/**
 * middle ware needed to parse the body. now body parser comes inbuilt with express
 */
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port,()=>console.log(`server up and running at ${port}`))
