const express = require('express')
const cors = require('cors');
const routerApi = require('./routes');


const app = express()
const port = 3150

routerApi(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})