const express = require('express');
const mongoose = require('mongoose');
const Assignment = require("../models/Assignment")

const router = express.Router();

// Connection to mongodb
mongoose.connect("mongodb://localhost/assignment_form", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

router.get("/", (req, res) => {
    res.render("index")
})

    .post("/add", (req, res) => {
        console.log(req.body);
        db.collection('submissions').insertOne(req.body, function (err, collection) {
            if (err) throw err;
            console.log("Record inserted Successfully");

        });

        res.redirect("/")
    })

    .get("/submissions", (req, res) => {
        Assignment.find({}, function (err, allDetails) {
            if (err) {
                console.log(err);
            } else {
                console.log(allDetails);
                res.render("submissions", { details: allDetails })
            }
        })
    })

module.exports = router;