const express = require("express");
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());


app.listen(1337, () => {
    console.log('Server has started on 1337')
})