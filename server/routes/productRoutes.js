const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/productController.js");
const { get } = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files


const router = express.Router();


router.route('/').get(getProducts).post(protect, admin, upload.single('image'), createProduct);
router.route('/:id').get(getProductById).put(protect, admin, upload.single('image'), updateProduct).delete(protect, admin, deleteProduct);

 

module.exports = router;