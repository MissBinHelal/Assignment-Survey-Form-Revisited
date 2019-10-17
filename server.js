const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const server = app.listen(3000, () => console.log("listening on port 3000"))


const io = require('socket.io')(server);


io.on('connection', function (socket) { //2


 //   socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('submit', function (data) { //7
        console.log(data); 
        socket.emit('send',{msg:"name  "+data.name+"  location  "+data.location+"  languge  "+data.languge+"  comment  "+data.comment} )
    });

});

app.get("/", (req, res) => {
    res.render('index')
})

