import express from 'express'
import GenRouter from './Router/QueryRouter'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(GenRouter)

app.listen(3000,()=>{
    console.log("the server is running on 3000 PORT")
})