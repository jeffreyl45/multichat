import {io} from 'socket.io-client';
let socket = null;
export const getWebSocket = () => {
    if (socket == null) {
        // tries to connect to current server
        // io opens the socket on the front end side and makes a connection with the backend
        socket = io();
        socket.on('connect', () => console.log(`socket id: ${socket.id} connected!`));
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect, 5000);
        });
        socket.on('disconnect', () => console.log('server disconnected'));
    }
    return socket;
};