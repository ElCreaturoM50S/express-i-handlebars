const express = require("express")
const expressHB = require("express-handlebars")
const path = require('path');

const app = express()

app.engine('handlebars', expressHB.engine({extname: 'handlebars', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("home", { title: "Portal o makaronach", content: "to jest tresc"})
})

app.get('/pasta/:id', (req,res) => {
    const pastaId = req.params.id;
    const pastaData = [
        {},
        {
          name: 'Spaghetti Carbonara',
          description: 'Spaghetti Carbonara to popularne włoskie danie przygotowywane z makaronu spaghetti, jajek, sera parmezan, boczku i pieprzu. Jest to proste, ale smaczne danie, które pochodzi z Rzymu.'
        },
        {
          name: 'Penne all\'Arrabbiata',
          description: 'Penne all\'Arrabbiata to włoskie danie z rurkowatym makaronem penne w sosie Arrabbiata, który jest pikantny i przygotowywany z pomidorów, czosnku, oliwy z oliwek i papryczek chili.'
        },
        {
          name: 'Fettuccine Alfredo',
          description: 'Fettuccine Alfredo to danie pochodzące z włoskiej kuchni, składające się z szerokich wstążek makaronu fettuccine w sosie z masła, śmietanki i sera parmezan.'
        },
        {
          name: 'Linguine with Clam Sauce',
          description: 'Linguine with Clam Sauce to włoskie danie z makaronem linguine, które jest serwowane z sosem na bazie małży, czosnku, oliwy z oliwek i białego wina.'
        },
        {
          name: 'Ravioli',
          description: 'Ravioli to rodzaj włoskiego makaronu, który jest wypełniony różnymi nadzieniami, takimi jak mięso, ser, szpinak lub grzyby. Jest często serwowany z sosem pomidorowym lub masłem i szałwią.'
        },
        {
            name: 'Spaghetti Carbonara',
            description: 'Spaghetti Carbonara to popularne włoskie danie przygotowywane z makaronu spaghetti, jajek, sera parmezan, boczku i pieprzu. Jest to proste, ale smaczne danie, które pochodzi z Rzymu.'
        },
      ];
    res.render('pasta', {title: 'Makaron', pasta: pastaData[pastaId]});
    console.log(pastaData[pastaId])
});

app.listen(8080, ()=>console.log("server działa"))