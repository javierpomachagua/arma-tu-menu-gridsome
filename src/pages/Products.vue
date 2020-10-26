<template>
  <Layout>
    <div>
      <h1 class="text-2xl text-center font-bold mb-10">PLATOS</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="dish in $page.strapi.dishes"
          :key="dish.id"
          class="flex rounded-xl shadow-md overflow-hidden h-24 min-h-0"
        >
          <g-image class="w-1/3 object-cover" :src="gridsomeApiUrl + dish.preview.url" />
          <div class="w-2/3 p-3 bg-white">
            <div class="flex justify-between mb-2">
              <p class="text-lg font-semibold">{{ dish.name }}</p>
              <button v-if="isSelected(dish.id)" class="rounded-full bg-green-200 p-2 focus:outline-none" @click="selectOrRemoveDish(dish)">
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
              <button v-else class="rounded-full border-green-200 border-2 text-green-300 p-2 focus:outline-none" @click="selectOrRemoveDish(dish)">
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
            <span
              class="text-sm rounded-full bg-green-500 px-2 py-1 text-white"
              >{{ dish.dish_type.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <g-link
      to="/"
      class="rounded-full h-16 w-16 bg-green-400 fixed bottom-0 right-0 mr-4 mb-4 flex items-center justify-center shadow-md"
    >
      <svg
        class="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </g-link>
  </Layout>
</template>

<page-query>
query {
  strapi {
    dishes {
      id,
      name,
      dish_type {
        name
      }
      preview {
        name
        url
      }
      ingredients {
        id
        units,
        ingredient {
          id
          name
          unit_type
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  methods: {
    isSelected(id) {
      return this.dishes.findIndex(dish => dish.id === id) >= 0
    },
    selectOrRemoveDish(dish) {
      this.$store.commit('selectOrRemoveDish', dish)
    }
  },
  computed: {
    dishes() {
      return this.$store.state.dishes
    },
    gridsomeApiUrl() {
      return process.env.GRIDSOME_STRAPI_URL
    }
  }
}
</script>

<style>

</style>