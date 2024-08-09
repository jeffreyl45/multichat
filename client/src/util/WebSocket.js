import {io} from 'socket.io-client';
let socket = null;
export const getWebSocket = () => {
    if (socket == null) {
        socket = io();
        socket.on('connect', () => console.log(`socket id: ${socket.id} connected!`));
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect, 5000);
        });
        socket.on('disconnect', () => console.log('server disconnected'));
    }
    return socket;
};