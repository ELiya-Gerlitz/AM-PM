import express from "express"
import cors from "cors"
import appConfig from "./2-Utils/AppConfig"
import productsRouter from "./6-Controllers/productsController"


const server= express()
server.use(cors())
server.use(express.json())

server.use("/api" , productsRouter)


server.listen(appConfig.port, ()=> console.log(`I am listening to port ${appConfig.port}`))


console.log("i am app")