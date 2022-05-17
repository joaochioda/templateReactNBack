const express = require('express')
const routes = require('./src/routes')

require('./src/database');

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(routes)


app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
