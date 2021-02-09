
const app = require('./src/config/express')();
const port = app.get('port');
const cors = require('cors');

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

app.get('/api/food', (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})



// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});