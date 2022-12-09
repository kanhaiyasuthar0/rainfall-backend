const express = require("express");
const app = express();
const cors = require("cors");
const rainController = require("./controller");
app.use(express.json([]));
app.use(cors());
// app.get("/", blogsController.greet());
app.get("/", rainController.greet());
app.get("/all", rainController.all());
app.post("/add", rainController.post());
app.post("/newRain", rainController.newRain());
app.put("/updateRain", rainController.updateRainData());
app.get("/rainAll", rainController.rainAll());
app.get("/strangetable", rainController.getStrangeTable());
app.post("/strangetable", rainController.postStrangeTable());
// app.post("/add", blogsController.addBlogs());
// app.get("/all", blogsController.getAllBlogs());
// app.post("/title", blogsController.getdataByTitle());
// app.patch("/like", blogsController.likeBlog());
// app.patch("/id", blogsController.viweBlog());

// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.send(req);
// });
module.exports = app;