const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Welcome to our home page")
  }
  if (req.url === '/about') {
    res.end('fuckkkk')
  }
  res.end(`
  <h1>HIIIIIIIII!!!!!!!!!!</h1>
  `)
});



server.listen(3000);