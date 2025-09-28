import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { useRoutes } from "./routes/routes.user.js";

const app = express();


app.use(cors());               
app.use(express.json());       


useRoutes(app);

mongoose.connect("mongodb+srv://HARI:pharmacy@cluster0.zhqowtj.mongodb.net/");

const db = mongoose.connection;
db.on("open", () => {
  console.log("MongoDB connection successful");
});
db.on("error", () => {
  console.log("MongoDB connection failed");
});


app.listen(3000, () => {
  console.log("Server running at port 3000");
});
