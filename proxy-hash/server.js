const express = require('express');
const app = express();
app.use(express.static(__dirname + '/staic'))
app.get('/person', (request, response) => {
  response.send({
    name: "Jack",
    age: 101
  })
  console.log(request);
})
app.listen(9009, (err) => {
  if (!err) console.log('服务器启动成功');
})
