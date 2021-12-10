
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', table => {
    table.increments('recipe_id')
        table.string('recipe_name', 128).notNullable().unique()
  })
  .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 128).notNullable().unique()
        table.string('ingredient_quantity', 50)
  })
  .createTable('steps', table => {
        table.increments('step_id')
        table.string('step_instructions', 256).notNullable()
        table.integer('step_number').notNullable()
        table.integer('recipe_id') //FK
             .unsigned()
             .notNullable()
             .references('recipe_id')
             .inTable('recipes')
             .onDelete('RESTRICT')
             .onUpdate('RESTRICT')
  })
  .createTable('step_ingredients', table => {
        table.increments('step_ingredient_id')
        table.float('quantity', 128).notNullable()
        table.integer('step_id')
             .unsigned()
             .notNullable()
             .references('step_id')
             .inTable('steps')
             .onDelete('RESTRICT')
             .onUpdate('RESTRICT')
             table.integer('ingredient_id')
             .unsigned()
             .notNullable()
             .references('ingredient_id')
             .inTable('ingredients')
             .onDelete('RESTRICT')
             .onUpdate('RESTRICT')
  })
};

exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('step_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};