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
      // Приведение цены к формату "$X.XX"
      return `$${this.product.price.toFixed(2)}`;
    },
    availabilityText() {
      // Текст о наличии товара
      return this.product.available ? 'В наличии' : 'Нет в наличии';
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
  background-color: #f8f9fa;
  text-align: center;
}

.product-details h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-details p {
  font-size: 18px;
  margin-bottom: 8px;
}

.product-details p:last-child {
  margin-bottom: 0;
}
</style>