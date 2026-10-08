
const express = require("express")
const app = express()


const {client, connectRedis} = require("./config/redis")
require("dotenv").config()

client.on('connect', () => console.log("redis connecting..."))



 












app.listen(process.env.PORT, () => {
    console.log(`Server running running:http://localhost:${process.env.PORT}`)
})