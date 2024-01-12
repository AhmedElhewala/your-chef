function extractIngredientsAndMeasures(meal) {
  const ingredientsAndMeasures = [];

  for (let key in meal) {
    if (key.includes("strIngredient") && meal[key]) {
      const ingredient = {
        "strIngredient": meal[key],
        "strMeasure": meal[key.replace("strIngredient", "strMeasure")]
      }
      ingredientsAndMeasures.push(ingredient);
    }
  }

  return ingredientsAndMeasures;
}

export {extractIngredientsAndMeasures}