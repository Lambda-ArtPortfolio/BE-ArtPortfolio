exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
  })
  .createTable('art-data', tbl => {
    tbl.increments()

    tbl.string('image').notNullable()
    tbl.string('description').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
    .dropTableIfExists('art-data')
};