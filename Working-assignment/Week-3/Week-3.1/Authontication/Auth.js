const jwt = require("jsonwebtoken");

//Decord, verify, generate

const value = {
    name : "Akshat",
    accountNumber : "0247000101291412"
}

const token = jwt.sign(value,"Sectre");
console.log(token);

const Details = jwt.verify(token,"Sectrae");
console.log(Details);


