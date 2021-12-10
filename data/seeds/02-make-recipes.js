const recipes = [
    {recipe_name: 'Broccoli Pesto Pasta'},
    {recipe_name: 'Lemon Chicken'},
    {recipe_name: 'Salmon en Papillote'},
]

const ingredients = [
    {ingredient_name: 'Broccoli', ingredient_quantity: 'lbs'},
    {ingredient_name: 'Pesto', ingredient_quantity: 'lbs'},
    {ingredient_name: 'Pasta', ingredient_quantity: 'lbs'},
    {ingredient_name: 'Lemon', ingredient_quantity: 'slices'},
    {ingredient_name: 'Chicken', ingredient_quantity: 'kilos'},
    {ingredient_name: 'Salmon', ingredient_quantity: 'grams'},
]

const step_ingredients = [
    {step_id: 2, ingredient_id: 1, quantity: 1},
    {step_id: 3, ingredient_id: 2, quantity: 1.5},
    {step_id: 3, ingredient_id: 3, quantity: 1},

    {step_id: 5, ingredient_id: 4, quantity: 1},
    {step_id: 5, ingredient_id: 5, quantity: 0.4},

    {step_id: 7, ingredient_id: 6, quantity: 1},
]

const steps = [
    {step_instructions: 'Heat pan', step_number: 1, recipe_id: 1},
    {step_instructions: 'Add broccoli', step_number: 2, recipe_id: 1},
    {step_instructions: 'Add pesto mixed with pasta', step_number: 3, recipe_id: 1},

    {step_instructions: 'Heat oven', step_number: 1, recipe_id: 2},
    {step_instructions: 'Put chicken and lemon in oven', step_number: 2, recipe_id: 2},
    {step_instructions: 'Put in oven at 400 degrees', step_number: 3, recipe_id: 2},

    {step_instructions: 'Fish for a salmon', step_number: 1, recipe_id: 3},
    {step_instructions: 'Cook salmon', step_number: 2, recipe_id: 3},
    
]

exports.seed = async function (knex){
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}