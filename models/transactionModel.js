const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    refernce: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "desc is required"],
    },
    date: {
      type: String,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transaction", transactionSchema);
