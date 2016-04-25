import  * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

var app: express.Express = express();

app.use(bodyParser.json());
//routes
import routes from './routes';
routes(app);
//set base path
import { setRootPath } from './helpers';
setRootPath(__dirname);

//datastore
import config from './config/dev/config';
mongoose.connect(config.dbConnection);

var server = app.listen(3002, function () {
    console.log('Server running at http://127.0.0.1:3002/');
});
