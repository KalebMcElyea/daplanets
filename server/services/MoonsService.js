import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
  async delete(id) {
    return await dbContext.Moons.findByIdAndDelete(id)
  }
  async create(body) {
    return await dbContext.Moons.create(body)
  }


  async find(query={}) {
    return await dbContext.Moons.find(query);
    
  }

}

export const moonsService = new MoonsService();