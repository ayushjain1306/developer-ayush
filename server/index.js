import express from "express";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

app.use(cors({
    origin: "https://developer-ayush-portfolio.vercel.app",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Router);

const PORT = process.env.port || 8000;

app.listen(PORT, ()=>{
    console.log("Server is running at port 8000.");
})

