import { Router } from 'express'
// import authRoutes from './authentication.routes'
import { authCORS } from '../controllers/authentication.controller'
import userRoutes from './user.routes'

const router = Router()

router.get('/', (req, res) => {
    res.send('Server up and running')
})

router.use('/api', authCORS)
// router.use('/api/auth', authRoutes)
router.use('/api/users', userRoutes)

export default router

