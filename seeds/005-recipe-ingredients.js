exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes-ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes-ingredients').insert([
        { recipesId: 1, ingredientsId: 1 },
        { recipesId: 1, ingredientsId: 2 },
        { recipesId: 1, ingredientsId: 3 }
      ]);
    });
};
