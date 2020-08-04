exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipeName: 'Peanut Butter and Jelly Sandwich',
          recipeDescription: 'A classic recipe for the whole family to enjoy.'
        }
      ]);
    });
};
