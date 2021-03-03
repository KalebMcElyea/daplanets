import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxysService {
  async delete(id) {
    return await dbContext.Galaxys.findByIdAndDelete(id)
  }
  async create(body) {
    return await dbContext.Galaxys.create(body)
  }


  async find(query={}) {
    return await dbContext.Galaxys.find(query);
  }

}

export const galaxysService = new GalaxysService();