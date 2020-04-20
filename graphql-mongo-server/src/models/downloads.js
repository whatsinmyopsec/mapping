import mongoose from "mongoose";

const Schema = mongoose.Schema;

const formattedSchema = new Schema({

        _id: String,
        destfile: String,
        duplicate: Boolean,
        eventid: String,
        message: String,
        outfile: String,
        sensor: String,
        session: String,
        shasum: String,
        src_ip: String,
        timestamp: Date,
        url: String
});
export const downloads = mongoose.model("downloads", formattedSchema);
