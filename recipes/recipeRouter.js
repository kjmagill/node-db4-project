const router = require('express').Router();
const recipes = require('./recipeModel');

router.get('/', (req, res) => {
  recipes
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'Error getting recipes.'
      });
    });
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;
  recipes
    .getShoppingList(id)
    .then(list => {
      if (list.length) {
        res.status(200).json(list);
      } else {
        res.status(404).json({
          error: 'Error finding recipe.'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'Error finding ingredients.'
      });
    });
});

router.get('/:id/steps', (req, res) => {
  const { id } = req.params;
  recipes
    .getInstructions(id)
    .then(steps => {
      if (steps.length) {
        res.status(200).json(steps);
      } else {
        res.status(500).json({
          error: 'Error finding steps for given recipe.'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'Error finding steps.'
      });
    });
});

module.exports = router;
