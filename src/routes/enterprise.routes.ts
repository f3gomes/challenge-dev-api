import express from "express";
import {
  deleteEnterprise,
  getEnterprises,
  patchEnterprise,
  postEnterprise,
} from "../controllers/enterprise.controller";
import { findEnterpriseById } from "../services/enterprise.service";

export const enterpriseRoutes = express.Router();

enterpriseRoutes.post("/ent/new", postEnterprise);
enterpriseRoutes.get("/ent/list", getEnterprises);
enterpriseRoutes.get("/ent/:id", findEnterpriseById);
enterpriseRoutes.patch("/ent/:id", patchEnterprise);
enterpriseRoutes.delete("/ent/:id", deleteEnterprise);
