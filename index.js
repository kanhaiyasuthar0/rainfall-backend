const http = require("http");
const port = process.env.PORT || 8000;
const app = require("./app");
const connect = require("./db");

http.createServer(app).listen(port, async () => {
    console.log(`listening at port ${port}`);
    await connect();
});