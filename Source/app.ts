import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import habitat from 'habitat';
import SESSION_SECRET from './util/secrets';

const app: express.Application = express();
const env = new habitat('lockman', {port: 3000});
const PORT: number = env.get('port');

app.set('port', PORT);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: SESSION_SECRET,
	store: new MongoStore({
		url: mongoUrl,
		autoReconnect: true
	})
});

app.get('/', function(req, res) {
	res.send(`Hello world!`);
});


export default app;