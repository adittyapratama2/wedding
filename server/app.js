import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./src/config/db.js";

//Rooutes
import guestRoutes from "./src/routes/guests.js";

const app = express();

dotenv.config();

const PORT = process.env.APP_PORT || 5000;

const URL = "/api/v1";

// (async () => {
//   await db
//     .sync()
//     .then((result) => {
//       console.log("All models were synchronized successfully." + result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// })();

app.use(cors());
app.use(express.json());

//Routes API
app.get(`${URL}/`, (req, res) => {
  res.send("Hello first route API Wedding");
});

app.use(`${URL}/guests`, guestRoutes);

app.listen(PORT, () => {
  console.log(`Wedding server running on port ${PORT}`);
});
