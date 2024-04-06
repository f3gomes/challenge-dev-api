import mongoose from "mongoose";

const enterpriseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["RELEASE", "IN_PROGRESS", "CANCELLED"],
    required: true,
  },
  purpose: {
    type: String,
    enum: ["HOME", "COMMERCIAL", "OTHER"],
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
    cep: {
      type: String,
      required: true,
    },
  },
});

export const Enterprise = mongoose.model("Enterprise", enterpriseSchema);
