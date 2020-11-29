const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 8080
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const { account, password } = req.body
    // 由于没有注册功能，所以假定账号密码都为 admin
    if (account == 'admin' && password == 'admin') {
        res.send({
            msg: '登录成功',
            code: 0,
        })
    } else {
        res.send({
            msg: '登录失败，请输入正确的账号密码',
            code: 1,
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
