const db = require('../../data/db-config')


async function getRecipeById(recipe_id){
    
    const rows = await db ('recipes as r')
    .join('steps as s', 's.recipe_id', ' r.recipe_id')
    .leftJoin('step_ingredients  as si','s.step_id','si.step_id',)
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .select('r.recipe_id', 'r.recipe_name', 's.step_id',
            's.step_number', 's.step_instructions',
            'i.ingredient_id', 'i.ingredient_name',
            'si.quantity')
    .where('r.recipe_id', recipe_id)

    const result = { steps: [] }
    result.recipe_id = rows[0].recipe_id
    result.recipe_name = rows[0].recipe_name

    rows.forEach(row => {
        if (row.step_number) {
            result.steps.push({
                contents: row.contents,
                steps_id: row.recipe_id,
                step_number: row.step_number,
                step_instructions: row.step_instructions,
                ingredient_name: row.ingredient_name,
                quantity_amount: row.quantity_amount
            })
        } else {
            result.steps = []
        }
        
    })

    return result
}

module.exports = { getRecipeById }