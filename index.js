const WebSocket = require('ws')
const wsServer = new WebSocket.Server({port: 8080})

wsServer.on('connection', connection => {
  connection.send('<h2>Hello my remote ppl!</h2>')
  connection.on('message', message => {
    const message = JSON.parse(message)
    wsServer.clients.forEach(function each(client) {
      client.send(JSON.stringify(message))
    })
  })
})