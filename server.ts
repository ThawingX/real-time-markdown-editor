import express from 'express'

const app = express()

// use ejs view engine as our template engine
app.set('view engine', 'ejs')

// serve static files folder
app.use(express.static(__dirname + '/public'))

// routes for app
app.get('/', (req, res) => {
  // render home page by specifying the view file name in views folder
  res.render('home')
})


const port = process.env.PORT || 3030
app.listen(port)