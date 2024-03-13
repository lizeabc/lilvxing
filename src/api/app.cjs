const express = require('express');
const cors = require('cors');

const app = express();

// 使用cors中间件处理跨域请求
app.use(cors());

// 其他Express路由和逻辑代码
// 注册接口
app.post('/register', (req, res) => {
    // 这里可以添加注册逻辑，比如接收用户注册信息，保存到数据库等
    // 假设注册成功后返回一个JSON格式的成功消息
    const successMessage = {
        message: 'User registered successfully'
    };
    res.json(successMessage);
});

// 启动Express应用程序
const PORT = 3666;
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
