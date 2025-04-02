import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT || 8080;
const app: Application = express();

// * Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// * Routes
app.get("/", (req: Request, res: Response) => {
  return res.send("<h1>Server is Running... 🚀</h1>");
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
