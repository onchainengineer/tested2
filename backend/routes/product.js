var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');
const auth = require('../auth/auth');

router.get("/",productController.getProducts);
router.post("/",auth.verifyUser,auth.verifySeller,productController.addProduct);
router.get("/:id",productController.getProduct);
router.put("/:id",auth.verifyUser,auth.verifySeller,productController.editProduct);
router.delete("/:id",auth.verifyUser,auth.verifySeller,productController.deleteProduct);

module.exports = router;