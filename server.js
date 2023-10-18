const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
// const articleRouter = require('./routes/articles')
const homeRouter = require('./routes/home')
const methodOverride = require('method-override')
const app = express()


mongoose.connect('mongodb://127.0.0.1:27017/blog', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static('public'));
app.use(homeRouter)

app.get('/',(req,res) => {
    res.render('index')
})

app.get("/home",homeRouter)
// app.use('/articles',articleRouter)
app.listen(8080)
