const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;
const disPath = path.join(__dirname, "/dist");

app.use(express.static(disPath));

app.get("/*", (req, res) => {
    res.sendFile('index.html', { root: disPath });
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
