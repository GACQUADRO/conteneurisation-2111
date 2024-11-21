const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Backend1!' });
    // res.json({ message: 'Hello from Backend2!' });
});

app.get('/api2', (req, res) => {
    res.json({ message: 'Hello from Backend2!' });
});


app.listen(6000, () => console.log('API running on port 6000'));