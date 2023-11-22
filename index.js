const express = require("express");
const expresshandler = require("express-handlebars");

const makaronDane = require("./public/data/makaronyDane.json");

const app = express()

app.engine("handlebars", expresshandler.engine());
app.set("view engine", "handlebars")
app.set("views", "./views")

app.use(express.static("public"))

app.get("/", (req,res) => {
  res.render("home", {
    makaronDane: makaronDane,
  });
});

app.get("/:id", (req,res) => {

  //:id daje nam (id) fragment url po :
  const { id } = req.params;
  //makaron z makaronDane[id]
  try {
    const makaron = makaronDane[id]
    if (makaron) {
      //render makaron view with makaronDane
      res.render("makaron", {
        makaronDane: makaron,
      });
    } else {
      res.status(404).render("strona404")
    }
  } catch (error) {
    res.status(500).render("strona500")
  }
  
  //jezeli mamy makaron z makaron id to jest git
});

app.get("/SEKRET", (req, res) => {
  res.render("innastrona")
});

//* jest kazdym innym url ktory nie jest w innych getach
app.get("*", (req, res) => {
  //tstatus zwraca status
  res.status(404).render("strona404")
});



//porty
const port = 2137 
app.listen(port, () => {
  console.log(`Czy to jest serwer ${port}?, tak to jest serwer ${port}`)
})