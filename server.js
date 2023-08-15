import express  from "express";
import "dotenv/config";
import "./database/connectDB.js";
import randonUser from "./routes/randonUsers.routes.js";
import cors from "cors";

const app = express();
app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/random", randonUser);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT} ✨✨✨`));