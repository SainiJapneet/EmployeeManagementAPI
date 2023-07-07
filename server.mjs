import express from "express";
import dbConnect from "./model/dbConnect.mjs";
import routes from "./routes/routes.mjs";

const app = express();
const port = 4040;
dbConnect();

//cors error handling 
app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content, Content-Type, Authorization");
    response.setHeader("Access-Control-Allow-Methods","POST, GET, PATCH, PUT, DELETE, OPTIONS");
    next();
})


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',routes);
app.listen(port,()=>{
    console.log("Server running on port " + port)
});