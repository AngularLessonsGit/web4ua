const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello web4ua');
});

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log('Let1s go!');
});
