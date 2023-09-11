import  Express from  'express';
import { taskrouter } from './src/routes/task.routes.js';
import { starDb } from './src/config/database.js';
import cors from 'cors';

const app = Express();

app.use(Express.json())
app.use(cors())

const port = 3000;

app.get('/',(req,res)=>{
    res.send('todo listo')
})

app.use('/',taskrouter)

app.listen(port,() => {
    console.log(`server listening http://localhost:${port}`)
    starDb()
})