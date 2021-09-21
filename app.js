const express = require('express')

const app = express()


// middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes

app.use(require("./routes/index"))
// app.use(require("./routes/assignment"))

app.listen(3000, () => console.log("Server is listening at port 3000"));