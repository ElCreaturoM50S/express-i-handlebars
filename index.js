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

app.get("/pasta/:id", (req,res) => {
  //:id daje nam (id) fragment url po :
  const { id } = req.params;
  //makaron z makaronDane[id]
  const makaron = makaronDane[id]

  //jezeli mamy makaron z makaron id to jest git
  if (makaron) {
    //render pasta view with makaronDane
    res.render("pasta", {
      makaronDane: makaron,
    });
  } else {
    //handle error 404
    //if respond is 404(page not found then)
    res.status(404).render("404")
  }
});


//* jest kazdym innym url ktory nie jest w innych getach
app.get("*", (req, res) => {
  //tstatus zwraca status
  res.status(404).render("404")
});

const port = 2137 

app.listen(port, () => {
  console.log(`Czy to jest serwer ${port}?, tak to jest serwer ${port}`)
})