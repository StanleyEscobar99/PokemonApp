require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const Pokemon = require("./models/pokemon")
const reactViews = require('express-react-views')
const mongoose = require("mongoose")
const pokemonSeed = require("./data/pokemonSeed");
let useDb = false;


mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        useDb = true;
        console.log("connected to mongo");
    })
    .catch(() => {
        useDb = false;
        console.log("Mongo not connected, using seed data instead.");
    });
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


app.use((req, res, next) => {
    next()
})

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>");
});





app.get("/pokemon/new", (req, res) => {
    res.render("New")
})




app.post("/pokemon", (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        if (!error) {
            // redirects after creating fruit, to the Index page
            res.status(200).redirect("/pokemon")
        } else {
            res.status(400).send(error)
        }
    })
})


app.get("/pokemon/:id", (req, res) => {
  if (!useDb) {
    const pokemonIndex = Number(req.params.id);
    const selectedPokemon = pokemonSeed[pokemonIndex];

    if (!selectedPokemon) {
      return res.status(404).send("Pokemon not found");
    }

    return res.render("Show", { pokemon: selectedPokemon });
  }

  Pokemon.findById(req.params.id, (error, foundPokemon) => {
    if (!error && foundPokemon) {
      res.render("Show", { pokemon: foundPokemon });
    } else {
      res.status(404).send("Pokemon not found");
    }
  });
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

