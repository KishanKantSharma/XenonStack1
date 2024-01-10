const ex = require("express")
const app = ex()
const collection = require("./mongodb")
const connection = require("./db.js")

app.use(ex.urlencoded({extended:false}))


app.get('/', (req, res) => {
  res.render("index.ejs")
})

app.get('/login', (req, res) => {
  res.render("login.ejs")
})

app.get('/register', (req, res) => {
  res.render("register.ejs")
})

app.post("/register", async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
})

app.post("/login", async (req, res) => {
  
  try {
    const check = await collection.findOne({ email: req.body.email })
    
    if (check.password === req.body.password) {
      res.render("index.ejs")
    }
    else {
      res.send("Oops, wrong password")
    }
  }
  catch {
    res.send("wrong details")
  }

  res.render("index.ejs")
})

app.listen(3000, async () => {
  await connection("mongodb+srv://kishan:1801@db.sb7d6hf.mongodb.net/?retryWrites=true&w=majority")
})