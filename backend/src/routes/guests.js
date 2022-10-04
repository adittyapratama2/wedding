import express from "express";
import Guest from "../models/Guests.js";
import { createError } from "../utils/error.js";
import {
  createGuest,
  deleteGuest,
  getAllGuest,
  getByNameGuest,
  updateGuest,
} from "../controller/guestController.js";

const router = express.Router();

//CREATE
router.post("/", createGuest);
//UPDATE
router.put("/:id", updateGuest);
//DELETE
router.delete("/:id", deleteGuest);
//GET BY ID
router.get("/:id", getByNameGuest);
//GET ALL
router.get("/", getAllGuest);

export default router;
