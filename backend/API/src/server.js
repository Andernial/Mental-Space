import  express  from "express"
import dotenv from 'dotenv';
import cors from 'cors'
import { testConnection } from "./database/connection.js"
import { routers } from "./routes/Index.routes.js"
// import { corsOptions } from "./middlewares/cors.js"

dotenv.config();

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(routers)



app.listen(port, () => {
    testConnection()
    console.log(`Funcionando na porta ${port}`)
})


