import express from "express";
import BaseController from "../utils/BaseController";
import { speciesService } from "../services/SpeciesService";

export class SpeciesController extends BaseController {
  constructor() {
    super("api/species");
    this.router
      .post("", this.create)
      .delete("/:id", this.delete);

  }
  
  async create(req, res, next) {
    try {
      res.send(await speciesService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async delete(req,res,next){
    try {
      res.send(await speciesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}