const exp = require('express')
const app = exp()

const { Server } = require('socket.io')

const io = new Server(8081, { cors: true })


io.on('connection', socket => {
    socket.join('s')
    socket.on('msg',user=>{
        socket.broadcast.to('s').emit('recieveMsg',user)
    })

    socket.on('typing',msg=>{
        socket.broadcast.emit('typing',msg)
    })
})