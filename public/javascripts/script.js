document.addEventListener("DOMContentLoaded", function(event) {
    var socket = io();
    var interval = setInterval(function() {

        // console.log("5");
        socket.emit('send coordinates', 5);

    }, 1000);

    /*
    document.getElementsByTagName("form").submit(function(e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', document.getElementById('m').value);
        document.getElementById('m').value;
        return false;
    });

    */
    socket.on('chat message', function(msg){
        // console.log("client", msg);
        document.getElementById('messages').innerHTML += "<li>" + String(msg) + "</li>";
    });
});