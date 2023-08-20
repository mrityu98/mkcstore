import express from  'express';
import { getProductById, getProducts } from '../controller/productController.js';
import { userSignUp, userLogin} from '../controller/userController.js';
// import { addItemInCart } from '../controller/cart-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById); 

 
// router.post('/cart/add', addItemInCart);

export default router;

