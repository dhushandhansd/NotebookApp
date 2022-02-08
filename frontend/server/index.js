const express = require('express');
const app = express();
const PORT = 7000;
const path = require('path');


app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});


app.listen(PORT, () => {
    console.log(`Frontend Server running at ${PORT}`);
})