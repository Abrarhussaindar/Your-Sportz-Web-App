const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("../dist"))
app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"))
})
const port = 8080;
app.listen(port, () => {
    console.log(`server running on port ${port} `);
})