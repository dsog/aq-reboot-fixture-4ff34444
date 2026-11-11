const http = require("http");

const port = Number(process.env.PORT);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("PORT is required");
  process.exit(1);
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end("reboot-fixture-ok\n");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`listening ${port}`);
});
