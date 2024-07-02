<template>
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p>{{ formattedPrice }}</p>
      <p>{{ availabilityText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetails',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    computed: {
      formattedPrice() {
        return `$${this.product.price.toFixed(2)}`;
      },
      availabilityText() {
        return this.product.available ? 'Available' : 'Out of stock';
      }
    }
  };
  </script>
  
  <style scoped>
  .product-details {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  