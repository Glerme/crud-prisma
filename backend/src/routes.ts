import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from "./controllers/UserControllers";

const router = Router();

router.post("/user", async (req, res) => {
  createUser(req, res);
});

router.get("/user", async (req, res) => {
  getAllUsers(req, res);
});

router.get("/user/:id", async (req, res) => {
  getOneUser(req, res);
});

router.patch("/user/:id", async (req, res) => {
  updateUser(req, res);
});

router.delete("/user/:id", async (req, res) => {
  deleteUser(req, res);
});

export { router };
