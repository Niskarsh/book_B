import { Router } from 'express'
import  { usersGetAll, userCreate, userDel } from '../controllers/users.controllers'
let router = Router()

router.get('/getall', usersGetAll)
router.post('/create', userCreate)
router.delete('/delete', userDel)

export default router