import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl = config.DB_URL;
mongoose.set("strictQuery", false);
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true
}).catch(error => console.log(error.reason));

const db = mongoose.connection; //connection 인스턴스 생성

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.get("/api", (req, res) => {
    res.send("Hello world!");
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")});