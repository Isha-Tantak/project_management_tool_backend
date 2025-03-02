import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

app.use("/api/projects", projectRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
