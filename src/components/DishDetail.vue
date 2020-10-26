<template>
  <div class="rounded-xl shadow-md overflow-hidden">
    <img :src="gridsomeApiUrl + dish.preview.url" alt="Image of the dish" class="h-32 w-full object-cover" />
    <div class="bg-white p-4 h-full">
      <p class="text-lg font-semibold mb-1">{{ dish.name }}</p>
      <span class="text-sm rounded-full bg-green-500 px-2 py-1 text-white">{{
        dish.dish_type.name
      }}</span>
      <p class="text-sm italic mt-3 mb-1">Ingredientes</p>
      <p class="text-sm" v-for="dish_ingredient in dish.ingredients" :key="dish_ingredient.id">
        {{ dish_ingredient.ingredient.name }} ({{ dish_ingredient.units }} {{ dish_ingredient.ingredient.unit_type }})
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  computed: {
    gridsomeApiUrl() {
      return process.env.GRIDSOME_STRAPI_URL
    }
  }
}
</script>

<style>

</style>