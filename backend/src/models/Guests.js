import mongoose from "mongoose";
const { Schema } = mongoose;

const GuestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  tag_name: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    enum: ["Temira", "Adittya"],
    default: "Temira",
  },
  status: {
    type: String,
    enum: ["Hadir", "Tidak Hadir"],
    default: "Tidak Hadir",
  },
});

export default mongoose.model("Guest", GuestSchema);
