import express, {  Request, Response } from 'express';
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';


const app = express();

// parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/users', UserRoutes)


app.get("/", (req:Request, res:Response) => {
    res.send({
        status: true,
        messege: 'Server live'
    })
})

export default app;
