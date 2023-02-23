import express from 'express';
import { hello } from './util';
const app = express();
const { PORT = 3000 } = process.env;
app.get('/', (_req, res) => {
  res.send({
    message: 'hello webpack xxx + typescript  xx templates',
  });
});
app.listen(PORT, () => {
  hello();
  console.log('server started at http://localhost:' + PORT);
});
