// packages/mock-api/index.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 8080; // Or any other port
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
  console.log(`Users endpoint: http://localhost:${port}/api/users`);
  console.log(`Products endpoint: http://localhost:${port}/api/products`);
});
