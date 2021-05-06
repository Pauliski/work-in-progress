const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }

  if (req.url === "/user") {
    res.write("<h1>Hello user Pauliski</h1>");
    res.end();
  }

  // console.log(req);
  // res.write("<h1>Hello there user</h1>");
  // res.end();
  // if (req.url === "/") {
  //   res.writeHead(200, {'Content-Type': 'text/html'})
  //   res.write("<h1>Welcome to Homepage</h1>");
  //   res.end();
  // }
  // if (req.url === "/user") {
  //   res.write("<h1>Hello user Pauliski</h1>");
  //   res.end();
  // }
});
server.listen(3000, () => console.log("Server is up and running"));
