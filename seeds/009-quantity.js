exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('quantity').insert([
        {
          amountNumber: 2,
          amountUnit: 'cups',
          ingredientsId: '4'
        },
        {
          amountNumber: 1,
          amountUnit: 'cups',
          ingredientsId: '5'
        }
      ]);
    });
};
