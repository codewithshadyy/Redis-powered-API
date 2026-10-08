
const redis = require("redis")

require("dotenv").config()


const client =  redis.createClient({
 url:"redis://127.0.0.1:6379",
 
})

const connectRedis  = async () => {
   try {
    if(client.isOpen){
        await client.connect()
    }
    
   } catch (error) {
       console.error(' Failed to establish Redis connection:', error);
        process.exit(1)
    
   }
    
}

module.exports  = { client, connectRedis}
