'use strict'

module.exports.findRecipeByrecipeId = function findRecipeByrecipeId(req, res, next) {
  res.send({
    recipeId: "gazpacho",
    descripcion: "sopa de tomate...",
    ingredients: "tomate, pepino, pimiento, ajo, sal aceite y agua",
    complexity: 1
  });
};

module.exports.deleteRecipe = function deleteRecipe(req, res, next) {
  res.sendStatus(204);
};

module.exports.updateRecipe = function updateRecipe(req, res, next) {
  res.sendStatus(204);
};