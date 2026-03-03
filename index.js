import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js";
import { initSocket } from "./services/socketService.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", authRoutes);

const server = http.createServer(app);  // wrap express

initSocket(server); // attach socket

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});