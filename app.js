// importar as configurações do servidor

const app = require('./config/server');

// parametrizar a porta de escuta

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

// criar a conexão por websocket

io.on('connection', (socket) => {
    console.log('Usuário Conectou');
    
    socket.on('disconnect', () => {
        console.log('Usuário desconectou!');
    }); 
});

app.use(require('./app/routes'));

server.listen(8000, () =>{
    console.log('Servidor ON')
});
