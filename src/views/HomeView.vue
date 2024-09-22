<template>
  <div class="home">
    <h1>Bienvenido a Nuestra Tienda de E-commerce</h1>
    <p>Explora nuestros productos y encuentra las mejores ofertas para ti.</p>
    <!-- Aquí podrías incluir un componente de lista de productos destacados -->
    <ProductList :products="featuredProducts" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'HomeView',
  components: {
    ProductList
  },
  data() {
    return {
      featuredProducts: []
    };
  },
  created() {
    this.fetchFeaturedProducts();
  },
  methods: {
    fetchFeaturedProducts() {

      this.featuredProducts = [
        { id: 1, name: 'Laptop', price: 999.99, description: 'Una potente laptop para todos tus necesidades diarias.' },
        { id: 2, name: 'Smartphone', price: 599.99, description: 'Un smartphone con la mejor cámara del mercado.' },
        { id: 3, name: 'Cafetera', price: 89.99, description: 'Empieza tu día con un café de la mejor calidad.' }
      ];
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}
</style>
