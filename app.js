import  Express from  'express';
import { taskrouter } from './src/routes/task.routes.js';
import { starDb } from './src/config/database.js';
import path from 'node:path'
import cors from 'cors';
import { fileURLToPath } from 'node:url';


const __filename= fileURLToPath(import.meta.url)
const __dirname =path.dirname(__filename)


const app = Express();

app.use(Express.json())
app.use(cors())

app.use(Express.static(path.join(__dirname,"src","public")))

app.set('views',path.join(__dirname,"src","views"))
app.set('view engine','ejs')

const port = 3000;

app.get('/',(req,res)=>{
    res.send('todo listo')
})

app.use('/',taskrouter)

app.listen(port,() => {
    console.log(`server listening http://localhost:${port}/foro`)
    starDb()
})