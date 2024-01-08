console.log('Server started')
const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 3000 })

server.on('connection', (socket) => {
    console.log('Client connected')

    // handle messages from clients
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`)
    })

    // handle connection closing
    socket.on('close', () => {
        console.log('Client disconnected')
    })
})