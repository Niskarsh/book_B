import { Router } from 'express'
import { signin, signup } from '../controllers/authentication.controller'
import  { authenticateWithGoogle, authWithGoogle, signInWithGoogle } from '../controllers/google.auth.controller'

const router = Router()

router.post ('/signin', signin)
router.post ('/signup', signup)
router.get('/withgoogle', authenticateWithGoogle)
router.get('/authgoogle', authWithGoogle)
router.post('/signingoogle', signInWithGoogle)
// router.get('/check', check)

export default router