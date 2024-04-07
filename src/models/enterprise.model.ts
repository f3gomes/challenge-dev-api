import mongoose from "mongoose";

const enterpriseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["SOON_RELEASE", "RELEASE", "IN_PROGRESS", "READY"],
    required: true,
  },
  purpose: {
    type: String,
    enum: ["HOME", "COMMERCIAL"],
    required: true,
  },
  ri_number: {
    type: String,
    required: true,
  },
  address: {
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    postal_code: {
      type: String,
      required: true,
    },
  },
});

export const Enterprise = mongoose.model("Enterprise", enterpriseSchema);
