//controla o que o app faz quando acessa rotas

module.exports = app => {
  app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um get'));

  app.post('/atendimentos', (req, res) => {
    console.log(req.body)
    res.send('Você está na rota de atendimentos e está fazendo um post')
})
}