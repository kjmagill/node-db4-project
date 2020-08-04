exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('quantity').insert([
        {
          amountNumber: 2,
          amountUnit: 'slices',
          ingredientsId: '1'
        },
        {
          amountNumber: 4,
          amountUnit: 'tablespoons',
          ingredientsId: '2'
        },
        {
          amountNumber: 1,
          amountUnit: 'tablespoons',
          ingredientsId: '3'
        }
      ]);
    });
};
