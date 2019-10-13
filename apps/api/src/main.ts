import * as express from 'express';
import cors from 'cors';
import {} from '@enix/api-interfaces';
import * as bodyParser from 'body-parser';
import * as Tortoise from 'tortoise';

const app = express();
app.use(cors());
app.use(bodyParser());

app.post('/api', (req, res) => {
  const tortoise = new Tortoise('amqp://localhost');
  tortoise.queue('mono').publish(req.body);
  console.log(req.body);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
