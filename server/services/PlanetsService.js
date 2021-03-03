import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
  async delete(id) {
    return await dbContext.Planets.findByIdAndDelete(id)
  }
  async create(body) {
    return await dbContext.Planets.create(body)
  }


  async find(query={}) {
    return await dbContext.Planets.find(query);
    
  }

}

export const planetsService = new PlanetsService();