
console.log(new Date());
require('http').createServer((req, res) => res.end("Debugger Attached \n")).listen(3000);
