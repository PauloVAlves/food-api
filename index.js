
const express = require('./src/config/express');
const cors = require('cors');

const app = express();
const port = app.get('port');

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});