
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
      table.increments('projects_id')
      table.string('name', 128).notNullable()
      table.string('description')
      table.boolean('completed').notNullable().defaultTo(false)
  })
  .createTable('resources', table => {
      table.increments('resource_id')
      table.string('name', 128).notNullable()
      table.string('description')
  })
  .createTable('tasks', table => {
      table.increments('task_id')
      table.string('description').notNullable()
      table.string('notes')
      table.boolean('completed').notNullable().defaultTo(false)
      table.integer('project_id')
        .notNullable().unsigned()
        .references('projects_id').inTable('projects')
  })
  .createTable('project_resources', table => {
      table.increments()
      table.integer('prject_id')
        .notNullable().unsigned()
        .references('projects_id').inTable('projects')
      table.integer('resource_id')
        .notNullable().unsigned()
        .references('resource_id').inTable('resources')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
