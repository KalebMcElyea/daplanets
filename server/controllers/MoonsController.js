import express from "express";
import BaseController from "../utils/BaseController";
import { moonsService } from "../services/MoonsService";

export class MoonsController extends BaseController {
  constructor() {
    super("api/moons");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .delete("/:id", this.delete);

  }
  async getAll(req, res, next) {
    try {
     res.send(await moonsService.find(req.query));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await moonsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async delete(req,res,next){
    try {
      res.send(await moonsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}