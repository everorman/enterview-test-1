const express = require('express')
const cors = require('cors');
const routerApi = require('./routes');
const { config } = require('./config/config');


const app = express();

app.use(express.json()) ;
routerApi(app);

app.listen(config.port, () => {
  console.log(`app listening on port ${config.port}`);
})