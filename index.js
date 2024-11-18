const express = require('express');
const app = express();
const port = 3000; 


app.use(express.json()); 


app.get('/', (req, res) => {
    res.send('Welcome to Lambda ');
});


app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
