import express  from "express";
import "dotenv/config";
import "./database/connectDB.js";
import randonUser from "./routes/randonUsers.routes.js";
import cors from "cors";

const app = express();

const whiteList = [ process.env.ORIGIN1]
app.use(cors({
    origin: function (origin, callback) {
        console.log("😯😯😯 =>", origin);
        if(!origin || whiteList.includes(origin)){
            return callback(null, origin);
        }
        return callback(
            "Error de CORS origin" + origin + " No autorizado!"
        )
    },
    credentials: true,
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/random", randonUser);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT} ✨✨✨`));