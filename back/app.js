var express = require("express");
var app = express();
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header(
    "Access-Control-Request-Headers",
    "Origin, X-Requested-With, Content-Type, Accept , authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use(express.json());





//login section
{

  app.post("/login", (req, res, next) => {
    
    console.log('login', req.body);
    if (req.body.data.['username'] === "admin" && req.body.data['password'] === "123456") {
      res.status(200);
      res.json({
        data: { token: "ADMINTOKENNODEJS" }
      }); /*+Math.random()*/
    } else {
      res.status(406);
      res.json({ error: "نام کاربری یا کلمه عبور اشتباه است" });
    }

    res.status(200);
  });
}