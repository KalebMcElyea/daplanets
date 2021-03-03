import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const StarSpecies = new Schema(
  {
    star: { type: ObjectId, ref: "Stars", required: true},
    species: { type: ObjectId, ref: "Species", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default StarSpecies;