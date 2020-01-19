import errorhandler = require("errorhandler");

import app from "./app";

if (process.env.NODE_ENV === 'development') {
	app.use(errorhandler());
}

const server = app.listen(app.get("port"), () => {
	console.log(`App is running at http://localhost:
		${app.get('port')} in ${app.get('env')} mode`);
	console.log(`Press CTRL-C to stop\n`);
});

export default server;