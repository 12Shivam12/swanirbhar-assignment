import { configDotenv } from "dotenv";
import express from 'express'
import connectDB from "./db/db.js";
import cors from 'cors';
import authRoutes from './routes/auth.route.js'

const app = express();

configDotenv();

app.use(express.json());
app.use(cors());

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);

        app.listen(3000, () => {
            console.log('server is running at 3000');
        })
    } catch (error) {
        console.log('Failed to connect the database');
    }
}

startServer();

app.use('/api/auth',authRoutes);

app.get('/', (req, res) => {
    res.send('Hello world');
})