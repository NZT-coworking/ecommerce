const router = require("express").Router();
const upload = require("../config/multer");
const productController = require("../controllers/productController");
const validadeJwtMiddleware = require("../middleware/validadeJwtMiddleware");


router.post('/addProduct', validadeJwtMiddleware, upload.single('file'), productController.addProduct);
router.get('/getProducts', productController.getProducts);

module.exports = router;
