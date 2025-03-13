const express = require("express");

const {
  addIncome,
  getAllIncome,
  deleteIncome,
  downloadIncomeExcel,
  editIncome
} = require("../controllers/incomeController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", protect, addIncome);
router.put("/edit/:id", protect, editIncome);
router.get("/get", protect, getAllIncome);
router.get("/downloadexcel", protect, downloadIncomeExcel);
router.delete("/delete/:id", protect, deleteIncome);

module.exports = router;
