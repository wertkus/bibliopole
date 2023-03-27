<template>
  <div class="flex bg-[#4b2a07] justify-between items-center bg-cover">
    <h2 class="text-2xl text-white font-medium pl-8">Book List</h2>
    <div class="flex items-center space-x-4 pr-8">
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

  <div class="h-full grid pt-10 bg-[#4b2a07] grid-cols-6 gap-14 px-4">
    <div
      v-for="product in sortedProducts"
      :key="product.id"
      class="bg-white shadow-md rounded-md p-4 items-center"
    >
      <img
        :src="product.image"
        alt="Product Image"
        class="w-50 mb-4 content-center"
      />
      <h3 class="text-lg font-medium mb-2">{{ product.name }}</h3>
      <p class="text-gray-600">{{ product.description }}</p>
      <p class="text-gray-800 font-medium mt-2">{{ product.price }}</p>
      <button class="button bg-lime-500 py-2 px-10 ml-8">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";

export default {
  name: "ProductList",
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
        {
          id: 4,
          name: "Product 1",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien faucibus, posuere",
          price: "$10.00",
          date: "2022-01-01",
        },
        {
          id: 5,
          name: "Product 1",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien faucibus, posuere",
          price: "$10.00",
          date: "2022-01-01",
        },
        {
          id: 6,
          name: "Product 1",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien faucibus, posuere",
          price: "$10.00",
          date: "2022-01-01",
        },
        {
          id: 7,
          name: "Product 1",
          image: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien faucibus, posuere",
          price: "$10.00",
          date: "2022-01-01",
        },
      ],
      sortType: "price",
    };
  },
  computed: {
    ...mapStores(useModalStore),
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
