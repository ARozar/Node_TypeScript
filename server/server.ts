import  * as express from 'express';
import * as bodyParser from 'body-parser';

var app: express.Express = express();

app.use(bodyParser.json());

import routes from './routes';
routes(app);



var server = app.listen(3002, function () {
    console.log('Server running at http://127.0.0.1:3002/');
});
