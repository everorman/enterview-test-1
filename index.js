const express = require('express')
const cors = require('cors');
const routerApi = require('./routes');


const app = express()
const port = 3150
app.use(express.json()) 
routerApi(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})