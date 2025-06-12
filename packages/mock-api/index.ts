// packages/mock-api/index.ts
import jsonServer from 'json-server'; // import 구문 사용

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 8080;
server.listen(port, () => {
  console.log(`JSON Server가 http://localhost:${port}에서 실행 중입니다.`);
  console.log(`사용자 엔드포인트: http://localhost:${port}/api/users`);
  console.log(`제품 엔드포인트: http://localhost:${port}/api/products`);
});
