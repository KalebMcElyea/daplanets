import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
  async delete(id) {
    return await dbContext.Stars.findByIdAndDelete(id)
  }
  async create(body) {
    return await dbContext.Stars.create(body)
  }


  async find(query={}) {
    return await dbContext.Stars.find(query);
    
  }

}

export const starsService = new StarsService();