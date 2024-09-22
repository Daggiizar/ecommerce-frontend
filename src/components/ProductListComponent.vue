<template>
  <div class="product-list">
    <h2>Productos Destacados</h2>
    <div class="products">
      <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.product-list .products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.product-list h2 {
  text-align: center;
}
</style>
