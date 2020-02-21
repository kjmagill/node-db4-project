exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('steps').insert([
        {
          stepNumber: 1,
          stepDirections: 'Pour cereal into bowl.',
          recipesId: 2
        },
        {
          stepNumber: 2,
          stepDirections: 'Pour milk over cereal inside bowl.',
          recipesId: 2
        }
      ]);
    });
};
