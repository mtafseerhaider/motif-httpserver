const https = require("http");
const fs = require("fs");
const fsp = require("fs").promises;
const host = "localhost";
const port = 80;
var message_id =
  "Y2lzY29zcGFyazovL3VzL01FU1NBR0UvZDlmZTk4NjAtOTRlNy0xMWVjLWIzYzYtOGIxMTVlY2ZlMDE0";

const sendWebexMessage = function (req, res) {
  fsp.readFile("WebexMessage.json").then((contents) => {
    res.setHeader("Content-Type", "text/html");
    var request_url = req.url;
    var id = request_url.split("/");
    if (message_id == id.slice(-1)) {
      res.writeHead(200);
      res.end(contents);
    } else {
      res.end("Error: Message not found");
    }
  });
};

const server = https.createServer(sendWebexMessage);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
