import express from "express";
import {
  getEnterprises,
  patchEnterprise,
  postEnterprise,
} from "../controllers/enterprise.controller";

export const enterpriseRoutes = express.Router();

enterpriseRoutes.post("/ent/new", postEnterprise);
enterpriseRoutes.get("/ent/list", getEnterprises);
enterpriseRoutes.patch("/ent/:id", patchEnterprise);
