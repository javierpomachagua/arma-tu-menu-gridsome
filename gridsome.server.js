// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

// @Doc https://gridsome.org/docs/taxonomies/
module.exports = function(api) {
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  api.loadSource(async (actions) => {
    // const dishes = await axios.get("http://localhost:1337/dishes");
    // const ingredients = await axios.get("http://localhost:1337/ingredients");

    // const dishesCollection = actions.addCollection("Dish");    
    // const ingredientsCollection = actions.addCollection("Ingredient");

    // dishesCollection.addReference('ingredients_detail', 'Ingredient');

    // for (const ingredient of ingredients.data) {
    //   ingredientsCollection.addNode({
    //     id: ingredient.id,
    //     name: ingredient.name,
    //     price: ingredient.price,
    //     unit_type: ingredient.unit_type
    //   });
    // }

    // for (const dish of dishes.data) {
    //   dishesCollection.addNode({
    //     id: dish.id,
    //     name: dish.name,
    //     description: dish.description,
    //     dish_type: dish.dish_type.name,
    //     image: `http://localhost:1337${dish.preview.formats.thumbnail.url}`,
    //     ingredients: dish.ingredients.map(item => item.id),
    //     ingredients_detail: dish.ingredients
    //   });
    // }
    
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
