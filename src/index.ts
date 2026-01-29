import express from "express";
import cors from "cors"; // npm install cors @types/cors
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes";
import experienceRoutes from "./routes/experienceRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/experiences", experienceRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Portfolio API");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
