import  express  from "express"
import { testConnection } from "./database/connection.js"
import { routers } from "./routes/Index.routes.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(routers)



app.listen(port, () => {
    testConnection()
    console.log(`Funcionando na porta ${port}`)
})


