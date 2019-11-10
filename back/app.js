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

//---------------------------------------------------

app.post("/login", (req, res, next) => {
  console.log("login", req.body);
  if (
    req.body.data["username"] === "admin" &&
    req.body.datapassword === "123456"
  ) {
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

//---------------------------------------------------

app.get("/dashboard", (req, res, next) => {
  res.json({
    all: 30,
    send: 15,
    receive: 10,
    archive: 5,
    new: 0,
    name: "masoud",
    sending: {
      count: 1,
      data: [
        {
          namefile: "q4",
          date: "1573305886",
          from: 117,
          to: 118,
          state: 7,
          comments: "متن توضیحات فایل",
          ntries: "0",
          file: "docq/doc7.pdf"
        }
      ]
    }
  });
  res.status(200);
});

//---------------------------------------------------

app.get("/fax/inbox", (req, res, next) => {
  res.json([
    {
      id: 14,
      user_id: 2,
      type: 2,
      src: 118,
      dst: 117,
      timesend: "1568210940",
      file: "recvq/fax000000001.tif",
      state: 0,
      visible: 1,
      comments: "RECV  to modem ttyI117",
      ntries: 0,
      style: null,
      created_at: "2019-11-10 12:22:56",
      updated_at: "2019-11-10 12:22:56"
    },
    {
      id: 15,
      user_id: 2,
      type: 2,
      src: 118,
      dst: 117,
      timesend: "1568220540",
      file: "recvq/fax000000002.tif",
      state: 0,
      visible: 1,
      comments: "RECV  to modem ttyI117",
      ntries: 0,
      style: null,
      created_at: "2019-11-10 12:22:56",
      updated_at: "2019-11-10 12:22:56"
    },
    {
      id: 16,
      user_id: 1,
      type: 2,
      src: 117,
      dst: 118,
      timesend: "1568220840",
      file: "recvq/fax000000003.tif",
      state: 0,
      visible: 1,
      comments: "RECV  to modem ttyI118",
      ntries: 0,
      style: null,
      created_at: "2019-11-10 12:22:56",
      updated_at: "2019-11-10 12:22:56"
    }
  ]);

  res.status(200);
});

//---------------------------------------------------

app.get("/fax/outbox", (req, res, next) => {
  res.json([
    {
      id: 9,
      user_id: 2,
      type: 1,
      src: 118,
      dst: 117,
      timesend: "1573305632",
      file: "docq/doc5.pdf",
      state: 7,
      visible: 1,
      comments: "",
      ntries: 0,
      style: null,
      created_at: "2019-11-10 08:14:23",
      updated_at: "2019-11-10 08:14:23"
    },
    {
      id: 10,
      user_id: 1,
      type: 1,
      src: 117,
      dst: 118,
      timesend: "1573305886",
      file: "docq/doc7.pdf",
      state: 7,
      visible: 1,
      comments: "",
      ntries: 0,
      style: null,
      created_at: "2019-11-10 08:14:23",
      updated_at: "2019-11-10 08:14:23"
    }
  ]);

  res.status(200);
});

//---------------------------------------------------

app.get("/fax/archive", (req, res, next) => {
  res.json([
    {
      id: 9,
      user_id: 2,
      type: 3,
      src: 118,
      dst: 117,
      timesend: "1573305632",
      file: "docq/doc5.pdf",
      state: 7,
      visible: 1,
      comments: "",
      ntries: 0,
      style: null,
      created_at: "2019-11-10 08:14:23",
      updated_at: "2019-11-10 08:14:23"
    },
    {
      id: 15,
      user_id: 1,
      type: 4,
      src: 118,
      dst: 117,
      timesend: "1568220540",
      file: "recvq/fax000000002.tif",
      state: 7,
      visible: 1,
      comments: "RECV  to modem ttyI117",
      ntries: 0,
      style: null,
      created_at: "2019-11-10 12:22:56",
      updated_at: "2019-11-10 12:22:56"
    }
  ]);

  res.status(200);
});

//---------------------------------------------------

app.get("/extesions", (req, res, next) => {
  res.json({
    data: {
      extesions: [1001, 1002, 1003]
    }
  });
  res.status(200);
});
app.post("/new-fax", (req, res, next) => {
  res.json({
    data: {
      extesions: [1001, 1002, 1003]
    }
  });
  res.status(200);
});

function randBetween(start, end, wantInt) {
  return wantInt
    ? Math.floor(Math.random() * (end - start + 1) + start)
    : Math.random() * (end - start + 1) + start;
}
