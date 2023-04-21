const https = require("http");
var url = require("url");

const data = [
  {
    id: 1,
    name: "arthi",
    location: "thavalakuppam",
  },
  {
    id: 2,
    name: "pavithra",
    location: "thirupuvanai",
  },
  {
    id: 3,
    name: "gayathri",
    location: "saram",
  },
];

// Task
// {
// id: 1,
// name : xxx,
// age : 20,
// courses : ["html"]
// }

https
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    const q = url.parse(req.url, true).query;

    // console.log(q, "----");

    for (const i of data) {
      if (i.id == q.id) {
        res.end(JSON.stringify(i));
      }
    }

    res.end(`not found ${q.id}`);
  })
  .listen(8080);
