const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');
const { log } = require('console');

app.get('/', (req, res) => {
	res.send('Dragon is running...');
});

app.get('/categories', (req, res) => {
	res.send(categories);
});

app.get('/categories/:id', (req, res) => {
	const id = req.params.id;
	const selectedCategory = category.find(n => n.id === id);
	res.send(selectedCategory);
});

app.get('/news', (req, res) => {
	res.send(news);
});

app.get('/news/:id', (req, res) => {
	const id = parseInt(req.params.id);
	if (id === 0) {
		res.send(news);
	} else {
		const selectedNews = news.filter(n => parseInt(n.id) === id);
		res.send(selectedNews);
	}
});

app.listen(port, () => {
	console.log('Dragon API is running on port ', port);
});
