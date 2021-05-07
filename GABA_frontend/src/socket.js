import io from 'socket.io-client';
const SERVER = "http://localhost:3500"

const socket = io(SERVER);

export default socket;