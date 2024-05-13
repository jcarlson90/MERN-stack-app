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

const MONGO_URI= "mongodb+srv://Jake:5b0aNo2COtHDUXsz@cluster0.inwkazg.mongodb.net/api-project?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

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