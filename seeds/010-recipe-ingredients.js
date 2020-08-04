exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes-ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes-ingredients').insert([
        { recipesId: 2, ingredientsId: 4 },
        { recipesId: 2, ingredientsId: 5 }
      ]);
    });
};
