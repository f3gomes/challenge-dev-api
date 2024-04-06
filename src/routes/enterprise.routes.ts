import express from "express";
import {
  deleteEnterprise,
  getEnterprises,
  patchEnterprise,
  postEnterprise,
} from "../controllers/enterprise.controller";

export const enterpriseRoutes = express.Router();

enterpriseRoutes.post("/ent/new", postEnterprise);
enterpriseRoutes.get("/ent/list", getEnterprises);
enterpriseRoutes.patch("/ent/:id", patchEnterprise);
enterpriseRoutes.delete("/ent/:id", deleteEnterprise);
