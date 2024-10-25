import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import db from './config/mongoose.js';
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import passport from "passport";
import JWTStrategy from './config/passport-jwt-strategy.js';

dotenv.config(); 
const port = process.env.PORT || 8000; // Use PORT from .env or default to 8000
const app = express();

// CORS setup
app.use(cors({
    origin: [process.env.REACT_APP_REQUEST_ORIGIN_URL,process.env.REACT_APP_REQUEST_ORIGIN_LOCAL_URL ], // Add both localhost and production frontend domains
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Include credentials if needed
}));


// Log incoming requests and preflight requests
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    
    next();
});

// Handle preflight requests for all routes
app.options('*', cors()); // This allows preflight requests for all routes


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/', routes);

app.listen(port, (err) => {
    if (err) {
        console.log("Error in running the server");
    }
    console.log("Server is running on port:", port);
});
