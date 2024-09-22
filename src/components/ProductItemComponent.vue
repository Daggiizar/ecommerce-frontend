<template>
  <div class="product-item">
    <img :src="product.image" alt="product.name" class="product-image"/>
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <div class="price">${{ product.price.toFixed(2) }}</div>
    <button @click="addToCart(product)">Añadir al Carrito</button>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
}
</script>

<style scoped>
.product-item {
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
}
.product-item .product-image {
  width: 100%;
  height: auto;
}
</style>
