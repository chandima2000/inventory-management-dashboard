import  express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser"; // Parse HTTP request body
import cors from 'cors';
import helmet from 'helmet'; // security-related HTTP headers
import morgan from "morgan"; // Logs HTTP requests (for development/debugging)


// Middleware Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())


// Custom Routes
app.get("/hello", (req, res) => {
    res.send("Hello World");
});



// Server Setup
const port = process.env.PORT || 3001;

app.listen(port,  () => {
    console.log(`Server is running on port ${port}`);
});