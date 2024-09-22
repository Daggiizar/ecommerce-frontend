<template>
  <div class="product-management">
    <h1>Gestión de Productos</h1>
    <ProductFormComponent
        v-if="currentProduct !== null"
        :initialProduct="currentProduct"
        @submit-product="handleProductSubmit"
        @cancel="handleCancel"
    />
    <hr />
    <ProductList :products="products" @edit="editProduct" @delete="deleteProduct" />
  </div>
</template>

<script>
import ProductFormComponent from '@/components/ProductFormComponent.vue';
import ProductList from '@/components/ProductListComponent.vue';
import productService from '@/services/productService';

export default {
  name: 'ProductManagementView',
  components: {
    ProductFormComponent,
    ProductList
  },
  data() {
    return {
      products: [],
      currentProduct: null
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      productService.getProducts()
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error("Error fetching products:", error);
          });
    },
    handleProductSubmit(product) {
      const action = product.id ? productService.updateProduct : productService.createProduct;
      action(product)
          .then(() => {
            this.fetchProducts();
          })
          .catch(error => {
            console.error("Error saving product:", error);
          })
          .finally(() => {
            this.currentProduct = null;
          });
    },
    editProduct(product) {
      this.currentProduct = { ...product };
    },
    deleteProduct(productId) {
      productService.deleteProduct(productId)
          .then(() => {
            this.fetchProducts();
          })
          .catch(error => {
            console.error("Error deleting product:", error);
          });
    },
    handleCancel() {
      this.currentProduct = null;
    }
  }
}
</script>

<style scoped>
.product-management {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
</style>
