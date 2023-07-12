const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transController");

//router objects
const router = express.Router();

//routes
//add trans post method
router.post("/add-transaction", addTransaction);

//edit trans post method
router.post("/edit-transaction", editTransaction);

//delete trans post method
router.post("/delete-transaction", deleteTransaction);

//get trans
router.post("/get-transaction", getAllTransaction);

module.exports = router;
