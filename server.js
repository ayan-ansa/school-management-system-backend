import "dotenv/config";
import express from "express";
import cors from "cors";
import schoolRoutes from "./routes/schools.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/schoolImages", express.static("schoolImages"));

app.use("/", (req, res) =>
  res.send({
    activateStatus: true,
    error: false,
  })
);
app.use("/api/schools", schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
