import  express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser"; // Parse HTTP request body
import cors from 'cors';
import helmet from 'helmet'; // security-related HTTP headers
import morgan from "morgan"; // Logs HTTP requests (for development/debugging)

// Import Custom Routes
import dashboardRoutes from './routes/dashboardRoutes';
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

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

app.use("/dashboard", dashboardRoutes );

app.use("/product", productRoutes);

app.use("/users",userRoutes);

app.use("/expenses", expenseRoutes);

// Server Setup
const port = Number(process.env.PORT) || 3001;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});