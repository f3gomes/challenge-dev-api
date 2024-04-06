import cors from "cors";
import express, { Application, Request, Response } from "express";
import { main as connectDB } from "./config/database";
import { enterpriseRoutes } from "./routes/enterprise.routes";

const app: Application = express();
const PORT = process.env.PORT || 9000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/", enterpriseRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "API is on!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
