import * as http from 'http';

import Server from './server';

import application from './config/application';

Server.set('port',application.port);

const server = http.createServer(Server);
server.listen(application.port);
server.on('error',onError);
server.on('listening',onListening);

function onListening() : void {
    console.log("Server application is running on http://localhost:"+application.port);
}

function onError(error: NodeJS.ErrnoException): void {
    // TODO when there is an eerror
}
