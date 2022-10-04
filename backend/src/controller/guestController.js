import Guests from "../models/Guests.js";

//CREATE GUEST
export const createGuest = async (req, res, next) => {
  const newGuest = new Guests(req.body);

  try {
    const savedGuest = await newGuest.save();
    res.status(200).json(savedGuest);
  } catch (err) {
    next(err);
  }
};

//UPDATE GUEST
export const updateGuest = async (req, res, next) => {
  try {
    const updatedGuest = await Guests.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedGuest);
  } catch (err) {
    next(err);
  }
};

//DELETE GUEST
export const deleteGuest = async (req, res, next) => {
  try {
    await Guests.findByIdAndDelete(req.params.id);
    res.status(200).json("Guest has been deleted");
  } catch (err) {
    next(err);
  }
};

//GET BY NAME GUEST
export const getByNameGuest = async (req, res, next) => {
  try {
    const response = await Guests.findById(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    next(err);
  }
};

//GET ALL GUEST
export const getAllGuest = async (req, res, next) => {
  try {
    const guests = await Guests.find();
    res.status(200).json(guests);
  } catch (err) {
    next(err);
  }
};
