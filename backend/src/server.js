import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Security middleware
app.use(helmet()); 
app.use(cors());
app.use(compression()); 

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log('Server running on port 5000');
});