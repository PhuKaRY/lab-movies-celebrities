const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");
const Movie = require("./../models/Movies.model");

router.get("/movies/create", async (req, res) => {
  try {
    const allcelebrities = await Celebrity.find();
    res.render("movies/new-movies", { allcelebrities });
  } catch (error) {
    console.log(error);
  }
});

router.post("/movies/create", async (req, res) => {
  try {
    const { title, genre, plot, cast } = req.body;
    console.log("this is the title", title);
    await Movie.create({
      title,
      genre,
      plot,
      cast,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
