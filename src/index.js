import express from "express";
import dotenv from "dotenv";
import colorRoutes from "./routes/colorRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userProfileRoutes from "./routes/userProfileRoutes.js";
import phoneProductRoutes from "./routes/phoneProductRoutes.js";
import userFavouriteProductRoutes from "./routes/userFavouriteProductRoutes.js";
import productCategoryRoutes from "./routes/productCategoryRoutes.js";
import phoneBrandRoutes from "./routes/phoneBrandRoutes.js";
import phoneInternalMemoryRoutes from "./routes/phoneInternalMemoryRoutes.js";
import phoneRAMRoutes from "./routes/phoneRAMRoutes.js";
import phoneModelRoutes from "./routes/phoneModelRoutes.js";
import serviceRegistrer from "./middlewares/serviceRegistrer.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import { sequelize } from "./config/database.js";
import cors from 'cors';
import https from 'https'
import fs from 'fs'

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: 'https://localhost:44342', credentials:true}));

app.use(cookieParser())

app.use(serviceRegistrer)
app.use("/api/Colors", colorRoutes);
app.use("/api/Auth", authRoutes);
app.use("/api/UserProfiles", userProfileRoutes);
app.use("/api/PhoneProducts", phoneProductRoutes);
app.use("/api/UserFavouriteProducts", userFavouriteProductRoutes);
app.use("/api/ProductCategories", productCategoryRoutes);
app.use("/api/PhoneBrands", phoneBrandRoutes);
app.use("/api/PhoneInternalMemories", phoneInternalMemoryRoutes);
app.use("/api/PhoneRAMs", phoneRAMRoutes);
app.use("/api/PhoneModels", phoneModelRoutes);

app.get("/", async function(req, res){
    res.send("adessibinden backend...");
})

app.use(function (req, res, next){
    res.status(404).send('<h1>Page not found</h1>')
})

app.use(errorMiddleware);

// sequelize.sync().catch(err => console.log(err));

const sslServer = https.createServer({
    key: fs.readFileSync("./cert/key.pem"),
    cert: fs.readFileSync("./cert/cert.pem")
}, app)

sslServer.listen(port, function(){ console.log(`Server is running on port ${port}`)});