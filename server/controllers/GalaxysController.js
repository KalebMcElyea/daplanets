import express from "express";
import BaseController from "../utils/BaseController";
import { galaxysService } from "../services/GalaxysService";
import { starsService} from "../services/StarsService";
import { moonsService} from "../services/MoonsService";
import { speciesService} from "../services/SpeciesService";

export class GalaxysController extends BaseController {
  constructor() {
    super("api/galaxys");
    this.router
      .get("", this.getAll)
      .get("/:id/stars", this.getAllStarsByGalaxyId)
      .get("/:id/planets", this.getAllPlanetsByGalaxyId)
      .get("/:id/moons", this.getAllMoonsByGalaxyId)
      .get("/:id/species", this.getAllSpeciesByGalaxyId )
      .post("", this.create)
      .delete("/:id", this.delete)
  }
  async getAll(req,res,next) {
    try {
      res.send(await galaxysService.find(req.query));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await galaxysService.create(req.body));
    } catch (error) {
      next(error);
    }
  }


  async getAllStarsByGalaxyId(req,res,next){
  try {
    res.send(await starsService.find({galaxy: req.params.id}))
  } catch (error) {
    next(error)
}
  }

  async getAllSpeciesByGalaxyId(req,res,next){
    try {
      res.send(await speciesService.find({galaxy: req.params.id}))
    } catch (error) {
      next(error)
  }
    }
  async getAllMoonsByGalaxyId(req,res,next){
    try {
      res.send(await moonsService.find({galaxy: req.params.id}))
    } catch (error) {
      next(error)
  }
    }


  async getAllPlanetsByGalaxyId(req,res,next){
    try {
      res.send(await starsService.find({galaxy: req.params.id}))
    } catch (error) {
      next(error)
  }
    }

  async delete(req,res,next){
    try {
      res.send(await galaxysService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
