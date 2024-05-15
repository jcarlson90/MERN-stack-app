import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from './routes/stories.js';

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true}));
app.use(cors());
app.use("/stories", storyRoutes);



const connectDB = async () => {

    try {
        await mongoose.connect(MONGO_URI)
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    } catch (err) {
        console.error("connection failed", err.message);

    }
}

connectDB();

mongoose.connection.on("open", () => console.log("connection to database successful"));
mongoose.connection.on("error", (err) => console.log(err));