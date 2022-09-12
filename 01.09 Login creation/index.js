// const express = require('express');
// const app = express();

// const env = require('dotenv').config();

// const users = []

// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.get('/api/placescout')

// const port = proces.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

const express = require('express');
const app = express();

const authors = require('./routes/authors');
const books = require('./routes/books');

app.use(express.json());



app.listen(config.get('port'), () => console.log(`Listening on port ${config.get('port')}...`));
