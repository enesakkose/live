const http = require('http')
const socketIo = require('socket.io')
const express = require('express')
const app = express()
const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

const BASE_URL = 'https://sofascores.p.rapidapi.com'
const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-key': '11003ffe37msh1ebfc217237d84bp1b8e38jsn1ded668c1a2b',
		'X-RapidAPI-Host': 'sofascores.p.rapidapi.com'
	}
};


io.on('connection', (socket) => {
  console.log('Bir kullanıcı bağlandı')

  socket.on('disconnect', () => {
    console.log('Bir kullanıcı ayrıldı')
  })
  
  socket.on('category', (id) => {
    fetch(`${BASE_URL}/v1/categories?sport_id=${id}`, OPTIONS)
      .then(res => io.emit('categories', res.json()))
  })

})

server.listen(5000, () => {
  console.log('Sunucu başlatıldı. Port: 5000')
})

/*socket.on('send message', (msg) => {
  console.log(msg);
  io.emit('message', a);
});
  socket.on('fetch live', () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-key': '11003ffe37msh1ebfc217237d84bp1b8e38jsn1ded668c1a2b',
        'X-RapidAPI-Host': 'sofascores.p.rapidapi.com',
      },
    }

    fetch(
      'https://sofascores.p.rapidapi.com/v1/events/schedule/live?sport_id=1', 
      options
    )
      .then((response) => response.json())
      .then((data) => io.emit('live events', data))
      .catch((err) => console.error(err))
  })


*/
