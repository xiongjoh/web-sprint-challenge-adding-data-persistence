
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
      table.increments()
      table.string('name', 128).notNullable()
      table.string('description')
      table.boolean('completed').notNullable().defaultTo(false)
  })
  .createTable('resources', table => {
      table.increments()
      table.string('name', 128).notNullable().unique()
      table.string('description')
  })
  .createTable('tasks', table => {
      table.increments()
      table.string('description').notNullable()
      table.string('notes')
      table.boolean('completed').notNullable().defaultTo(false)
      table.integer('project_id')
        .notNullable().unsigned()
        .references('id').inTable('projects')
        .onDelete('CASCADE').onUpdate('CASCADE')
  })
  .createTable('project_resources', table => {
      table.increments()
      table.integer('prject_id')
        .notNullable().unsigned()
        .references('id').inTable('projects')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('resource_id')
        .notNullable().unsigned()
        .references('id').inTable('resources')
        .onDelete('CASCADE').onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
