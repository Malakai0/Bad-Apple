const express = require('express')
const fs = require('fs');

const app = express();
const PORT = 30453;

const files = ["bad_apple.txt"]

files.forEach(file => {
    app.get(`/${file}`, (req, res) => {
        res.send(fs.readFileSync(`./${file}`));
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})