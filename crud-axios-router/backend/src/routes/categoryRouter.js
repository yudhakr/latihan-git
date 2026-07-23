const express = require("express")
const categoryRouter = express.Router()

const { readCategory, readCategoryid, createCategory, updateCategory, deleteCategory } = require("../controllers/categoryController.js")

categoryRouter.get('/category', readCategory);
categoryRouter.get('/category/:id', readCategoryid);
categoryRouter.post('/category', createCategory);
categoryRouter.put('/category/:id', updateCategory);
categoryRouter.delete('/category/:id', deleteCategory);

module.exports = categoryRouter