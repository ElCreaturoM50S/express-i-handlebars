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
    const pastaData = {  
        name: 'Spaghetti Carbonara',
        description: 'Spaghetti Carbonara to popularne włoskie danie przygotowywane z makaronu spaghetti, jajek, sera parmezan, boczku i pieprzu. Jest to proste, ale smaczne danie, które pochodzi z Rzymu.'
};
    res.render('pasta', {title: 'Makaron', pasta: pastaData});
});

app.listen(8080, ()=>console.log("server działa"))