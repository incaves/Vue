const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
app.use(history())
app.use(express.static(__dirname + '/staic'))
app.get('/person', (request, response) => {
  response.send({
    name: "Jack",
    age: 101
  })
  console.log(request);
})
app.listen(1009, (err) => {
  if (!err) console.log('服务器启动成功');
})
