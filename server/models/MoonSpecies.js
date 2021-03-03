import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const MoonSpecies = new Schema(
  {
    moon: { type: ObjectId, ref: "Moon", required: true},
    species: { type: ObjectId, ref: "Species", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default MoonSpecies;