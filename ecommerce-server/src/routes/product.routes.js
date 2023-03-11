const router = require("express").Router();
const upload = require("../config/multer");
const productController = require("../controllers/productController")

router.post('/addProduct', upload.single('file'), productController.addProduct);
router.get('/getProducts', productController.getProducts);

module.exports = router;
