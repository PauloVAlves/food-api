
const app = require('./src/config/express')();
const port = app.get('port');
const cors = require('cors');

app.use(cors());

app.get('/api/food', (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});