const Router = require('express');
const { register, login, verification, forgotPassword, getUserData, handleLoginWithGoogle } = require('../controllers/authController');

const authRouter = Router();

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/verification', verification)
authRouter.post('/forgotPassword', forgotPassword)
authRouter.get('/getUserData', getUserData)
authRouter.post('/signInWithGoogle', handleLoginWithGoogle)

module.exports = authRouter;