const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('AWS EC2 Docker Deployment Successful!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});