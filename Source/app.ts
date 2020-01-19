import express = require('express');

const app: express.Application = express();
const PORT: number = 3000;

app.get(`/`, function(req, res) {
	res.send(`Hello world!`);
});

app.listen(PORT, function(){
	console.log(`Example app running on port ${PORT}`);
})