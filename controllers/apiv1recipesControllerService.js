'use strict'

module.exports.getRecipes = function getRecipes(req, res, next) {
  res.send([
    {
      recipeId: "gazpacho",
      descripcion: "sopa de tomate...",
      ingredients: "tomate, pepino, pimiento, ajo, sal aceite y agua",
      complexity: 1
    }
  ]);
};

module.exports.addRecipe = function addRecipe(req, res, next) {
  res.send({
    message: 'This is the mockup controller for addRecipe'
  });
};