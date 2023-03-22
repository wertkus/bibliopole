<template>
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-lg font-medium">Product List</h2>
    <div class="flex items-center space-x-4">
      <button
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        @click="sortBy('price')"
      >
        Price
      </button>
      <button
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        @click="sortBy('name')"
      >
        Name
      </button>
      <button
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        @click="sortBy('date')"
      >
        Date
      </button>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="product in sortedProducts"
      :key="product.id"
      class="bg-white shadow-md rounded-md p-4"
    >
      <img :src="product.image" alt="Product Image" class="w-full mb-4" />
      <h3 class="text-lg font-medium mb-2">{{ product.name }}</h3>
      <p class="text-gray-600">{{ product.description }}</p>
      <p class="text-gray-800 font-medium mt-2">{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien faucibus, posuere",
          price: "$10.00",
          date: "2022-01-01",
        },
        {
          id: 2,
          name: "Product 2",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien faucibus, posuere",
          price: "$20.00",
          date: "2022-01-02",
        },
        {
          id: 3,
          name: "Product 3",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien faucibus, posuere",
          price: "$30.00",
          date: "2022-01-03",
        },
      ],
      sortType: "price",
    };
  },
  computed: {
    sortedProducts() {
      return this.products.sort((a, b) => {
        if (this.sortType === "price") {
          return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        } else if (this.sortType === "name") {
          return a.name.localeCompare(b.name);
        } else if (this.sortType === "date") {
          return new Date(a.date) - new Date(b.date);
        }
      });
    },
  },
  methods: {
    sortBy(type) {
      this.sortType = type;
    },
  },
};
</script>
