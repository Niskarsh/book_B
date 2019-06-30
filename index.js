import '@babel/polyfill'
import app from './utils/util'

const port = process.env.PORT || 3000

app.listen(port, console.log(`Started listening to port ${port}`))