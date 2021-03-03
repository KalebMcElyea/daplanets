import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesService {
  async delete(id) {
    return await dbContext.Species.findByIdAndDelete(id)
  }
  async create(body) {
    return await dbContext.Species.create(body)
  }


  async find(query={}) {
    return await dbContext.Species.find(query);
    
  }

}

export const speciesService = new SpeciesService();