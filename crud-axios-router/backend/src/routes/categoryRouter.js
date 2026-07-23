const express = require("express");
const categoryRouter = express.Router();

const {
  readCategory,
  readCategoryid,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController.js");
const { authJWT } = require("../middleware/auth.js");

categoryRouter.get("/Category", readCategory);                                                                                                                                                                                                                                                                                                                                                                                                                                        
categoryRouter.get("/Category/:id", readCategoryid);
categoryRouter.post("/Category", createCategory);
categoryRouter.put("/Category/:id", updateCategory);
categoryRouter.delete("/Category/:id", deleteCategory);

module.exports = categoryRouter;
