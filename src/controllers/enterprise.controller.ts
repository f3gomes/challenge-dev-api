import { Request, Response } from "express";
import {
  createEnterprise,
  findEnterprises,
} from "../services/enterprise.service";

export const postEnterprise = async (req: Request, res: Response) => {
  await createEnterprise(req, res);
};

export const getEnterprises = async (req: Request, res: Response) => {
  await findEnterprises(req, res);
};
