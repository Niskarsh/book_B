import express from 'express'
import bodyparser from 'body-parser'
import path from 'path'
import apiRoutes from '../routes'

let app = express()
app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

app.use('/', apiRoutes)
export default app