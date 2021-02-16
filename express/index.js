const express = require('express');
const fetch = require('node-fetch');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
	res.send('<h1>use users to get data from endpoint</h1>');
});

app.get('/users', (req, res) => {
	fetch(`http://localhost:8000/users`)
		.then((data) => data.json())
		.then((data) => res.send(data))
		.catch((err) => console.log(err));
});

app.listen(port, () => console.log(`Server started on port : ${port}`));
