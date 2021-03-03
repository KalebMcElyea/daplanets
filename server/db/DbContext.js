import GalaxySchema from "../models/Galaxy";
import PlanetSchema from "../models/Planet";
import StarSchema from "../models/Star";
import MoonSchema from "../models/Moon";
import SpecieSchema from "../models/Specie";
import mongoose from "mongoose";

class DbContext {
  Galaxys = mongoose.model("Galaxy", GalaxySchema);

  Planets = mongoose.model("Planet", PlanetSchema)

  Stars = mongoose.model("Stars", StarSchema)

  Moons = mongoose.model("Moons", MoonSchema)

  Species = mongoose.model("Species", SpecieSchema)
}

export const dbContext = new DbContext();
