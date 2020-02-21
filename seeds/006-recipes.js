exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipeName: 'Bowl of Cereal',
          recipeDescription:
            'One of the most popular "meals" amongst developers.'
        }
      ]);
    });
};
