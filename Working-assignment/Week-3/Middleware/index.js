const express = require("express");
const app = express();

// function return bool if the age of the person is greater than 14

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;

  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry your age is not fullfill",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have Successfullty Ride1",
  });
});

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have Successfullty Ride2",
  });
});

app.listen(3000);
