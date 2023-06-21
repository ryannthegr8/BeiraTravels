// dependancies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

app.use(bodyParser.json());
app.use(express.static("pages"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//conectiong using mongoose
mongoose.connect("mongodb://localhost:27017/dbBooking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("error", () => console.log("Error in connecting to database"));
db.once("open", () => console.log("Connected to Database Successfully"));

app.post("/book_trip", (req, res) => {
  var name = req.body.name;
  var mail = req.body.mail;
  var IDcard = req.body.IDcard;
  var residence = req.body.residence;
  var phone = req.body.phone;
  var bookedDestination = req.body.bookedDestination;
  var startDate = req.body.startDate;
  var endDate = req.body.endDate;
  var adults = req.body.adults;
  var children = req.body.children;
  var messageBooking = req.body.messageBooking;

  var data = {
    name: name,
    mail: mail,
    IDcard: IDcard,
    residence: residence,
    phone: phone,
    bookedDestination: bookedDestination,
    startDate: startDate,
    endDate: endDate,
    adults: adults,
    children: children,
    messageBooking: messageBooking,
  };

  db.collection("bookings").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record Added Successfully");
  });
  return res.send(
    '<script>alert("Submitted successfully. Our team will reach out")</script>'
  );
});

app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-origin": "*",
  });
  return;
});

app.listen(3000);

console.log("Listening on PORT - 3000");
