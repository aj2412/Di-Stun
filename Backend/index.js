
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import cors from 'cors';

const app = express()
app.use(cors());

dotenv.config();

const port = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI, {
    });
    console.log("Connected to MongoDB")
} catch (error) {
    console.log("Error:", error)
}

app.use("/getBook", bookRoute)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})