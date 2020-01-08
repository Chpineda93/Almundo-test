//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const hotelApi = require('./src/hotelApi');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get ("/", function (req, res){
  res.redirect ("/hotels");
});

app.route("/hotels")
  .post(function (req, res){ //get hotel list
    console.log("req", req.body)
    hotelApi.getHotels(req.body, function(hotels) {
      res.send(hotels);
    });
  });

app.route("/hotels/:id")
  .get(function (req, res) {
    hotelApi.getHotel(req.params.id, function(hotel) {
      console.log(hotel);
      res.send(hotel);
    })
  })

app.listen(3000, function (req, res){
  console.log("sever has started on port 3000");
});
