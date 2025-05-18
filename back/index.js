const express = require('express');
const app = express();

const PORT = 3000;
// const arrResponse = [{message: "Hello World!"}]


app.get('/hello-world', (req, res) => {
    res.json({message: "Hello World!"})

})


app.listen(PORT, () => console.log("Beleza, rodando na porta 3000!"));