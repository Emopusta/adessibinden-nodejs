import express from "express";
import dotenv from "dotenv";
import colorRoutes from "./routes/colorRoutes.js";
import asyncHandler from "./middlewares/asyncHandler.js";
import serviceRegistrer from "./middlewares/serviceRegistrer.js";

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use("/api", asyncHandler)
app.use(serviceRegistrer)

app.get("/", async function(req, res){
    res.send("adessibinden backend...");
})

app.use("/api/colors", colorRoutes);

app.use(function (req, res, next){
    res.status(404).send('<h1>Page not found</h1>')

})

app.listen(port, function(){ console.log(`Server is running on port ${port}`)});
