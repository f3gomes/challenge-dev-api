import { Request, Response } from "express";
import {
  createEnterprise,
  findEnterprises,
  removeEnterprise,
  updateEnterprise,
} from "../services/enterprise.service";

export const postEnterprise = async (req: Request, res: Response) => {
  await createEnterprise(req, res);
};

export const getEnterprises = async (req: Request, res: Response) => {
  await findEnterprises(req, res);
};

export const patchEnterprise = async (req: Request, res: Response) => {
  await updateEnterprise(req, res);
};

export const deleteEnterprise = async (req: Request, res: Response) => {
  await removeEnterprise(req, res);
};
