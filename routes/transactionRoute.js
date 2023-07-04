const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transController");

//router objects
const router = express.Router();

//routes
//add trans post method
router.post("/add-transaction", addTransaction);

//get trans
router.get("/get-transaction", getAllTransaction);

module.exports = router;
