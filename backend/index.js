const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const app = express();

// 增加json和url编码请求体大小限制
app.use(express.json({limit:'5mb'}));
app.use(express.urlencoded({limit:'5mb',extended:true}));

// 跨域中间件
app.use(cors()); //全局中间件
app.use(express.json()); //解析json数据，解析body的json数据

app.use('/api', router); //router挂在在解决问题之后，即中间件之后 '/api'加一个前缀


const PORT = 80;
app.listen(PORT, function() {
    console.log('Server is running on http://localhost:80');
});
