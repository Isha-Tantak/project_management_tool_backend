import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: String,
    tasks: [
        {
            id: Number,
            title: String,
            description: String,
            order: Number,
            stage: String,
            index: Number,
            attachment: [
                { type: String, url: String }
            ],
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now },
        }
    ]
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);
