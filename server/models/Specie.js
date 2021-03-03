import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const Specie = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String},
    moon: { type: ObjectId, ref: "Moon", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Specie;