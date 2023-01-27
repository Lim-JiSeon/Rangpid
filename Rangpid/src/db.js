import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection; //connection 인스턴스 생성

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
