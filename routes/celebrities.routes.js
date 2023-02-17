const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");
router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res, next) => {
  console.log(req.body);
  const mycelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };
  try {
    const myFirstCelebrity = await Celebrity.create(mycelebrity);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

router.get("/celebrities", async (req, res, next) => {
  try {
    const allCeleb = await Celebrity.find();
    console.log(allCeleb);
    res.render("celebrities/celebrities", { allCeleb });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
