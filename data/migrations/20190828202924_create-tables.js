
exports.up = function(knex) {
  return knex.schema.createTable('zoos', tbl => {
      tbl.increment();
      tbl.string('zoo_name', 128).notNullable();
      tbl.string('address', 128).notNullable().unique();
  })
  .createTable('species', tbl => {
      tbl.increment();
      tbl.string('species_name', 128).notNullable().unique();
  })
  .createTable('animals', tbl => {
    tbl.increment();
    tbl.string('animal_name', 128).notNullable();
    tbl.integer('species_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('species');
  })
};

exports.down = function(knex) {
  
};
