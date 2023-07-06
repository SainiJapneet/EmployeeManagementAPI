import express from "express";
import dbConnect from "./model/dbConnect.mjs";
import routes from "./routes/routes.mjs";

const app = express();
const port = 4040;
dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',routes);
app.listen(port,()=>{
    console.log("Server running on port " + port)
});