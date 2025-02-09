const express = require("express");
const zod = require("zod");
const app = express();
const schema = zod.array(zod.number());
// const users = [
//   {
//     name: "Akshat",
//     kidneys: [
//       {
//         healthy: false,
//       },
//     ],
//   },
// ];
// //Query Parameters, filters

// app.get("/get", (req, res) => {
//   let akshatKidneys = users[0].kidneys;
//   let numberofKidneys = akshatKidneys.length;
//   let numberofHealthyKidneys = 0;
//   for (let i = 0; i < akshatKidneys.length; i++) {
//     if (akshatKidneys[i].healthy)
//       numberofHealthyKidneys = numberofHealthyKidneys + 1;
//   }
//   const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
//   res.json({
//     numberofKidneys,
//     numberofHealthyKidneys,
//     numberofUnhealthyKidneys,
//   });
// });

// app.use(express.json());
// // send data in the body
// // middleware
// app.post("/", (req, res) => {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy,
//   });
//   res.json({
//     msg: "Done!",
//   });
// });

// app.put("/", (req, res) => {
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     users[0].kidneys[i].healthy = true;
//   }
//   res.json({
//     msg: "DOne! put",
//   });
// });

// // Remove all the Unhealthy Kidney
// app.delete("/", (req, res) => {
//   //you should return a 411
//   //olny if atleast one unhealthy kidney is there do this else return 411
//   if (isThereAtleastOneUnhealthyKidney()) {
//     const newKidneys = [];
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//       if (users[0].kidneys[i].healthy) {
//         newKidneys.push({
//           healthy: true,
//         });
//       }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({
//       msg: "Done Delete!",
//     });
//   } else {
//     res.status(411).json({
//       msg: "You have no Un healthy Kidney",
//     });
//   }
// });

// function isThereAtleastOneUnhealthyKidney() {
//   let atLeastOneUnHealthyKidney = false;
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (!users[0].kidneys[i].healthy) {
//       atLeastOneUnHealthyKidney = true;
//     }
//   }
//   return atLeastOneUnHealthyKidney;
// }

app.get("/health-checkup", (req, res) => {
  const id = req.query.id;
  const name = req.headers.name;
  const password = req.headers.password;

  if (name != "harkirat" || password != "pass") {
    res.status(400).json({
      msg: "Some thing up with your inputs",
    });
    return;
  }
  console.log("Hello");
  console.log(id);
  
  if (id != 1 || id != 2) {
    res.status(400).json({
      msg: "Some thing up with your inputs",
    });
    return;
  }
  console.log("Hello JI");
  res.json({
    msg: "Your Kidney is fine",
  });
});

app.use(express.json());
app.post("/health-checkup",(req,res)=>{
    //kidneys = [1, ]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    const kidneysLength = kidneys.length;

    // res.send("You have " + kidneysLength + " Kidneys");
    res.send({
        response,
    })

})
//global catches help you give the user a better error message
// app.use((err,req,res,next)=>{
//     res.json({
//         msg: "Something is error from our side",
//     })
// })
app.listen(3000);
