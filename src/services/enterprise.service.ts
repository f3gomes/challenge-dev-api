import { Request, Response } from "express";
import { Enterprise } from "../models/enterprise.model";
import { isValidObjectId } from "mongoose";

export const createEnterprise = async (req: Request, res: Response) => {
  try {
    const enterprise = await Enterprise.create(req.body);
    res.status(201).json(enterprise);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

export const findEnterprises = async (_req: Request, res: Response) => {
  try {
    const enterprises = await Enterprise.find();
    res.status(200).json(enterprises);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const findEnterpriseById = async (req: Request, res: Response) => {
  if (!isValidObjectId(req.params.id)) {
    res.status(404).json({ error: "Invalid enterprise ID." });
  } else {
    try {
      const enterprise = await Enterprise.findById(req.params.id);

      if (!enterprise) {
        res.status(404).json({ error: "Enterprise not found." });
      } else {
        res.status(200).json(enterprise);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const updateEnterprise = async (req: Request, res: Response) => {
  if (!isValidObjectId(req.params.id)) {
    res.status(404).json({ error: "Invalid enterprise ID." });
  } else {
    try {
      const enterprise = await Enterprise.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {
          new: true,
        }
      );

      if (!enterprise) {
        res.status(404).json({ error: "Enterprise not found." });
      } else {
        res.status(200).json(enterprise);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const removeEnterprise = async (req: Request, res: Response) => {
  if (!isValidObjectId(req.params.id)) {
    res.status(404).json({ error: "Invalid enterprise ID." });
  } else {
    try {
      const enterprise = await Enterprise.findByIdAndDelete(req.params.id);

      if (!enterprise) {
        res.status(404).json({ error: "Enterprise not found." });
      } else {
        res.status(204).end();
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
};
