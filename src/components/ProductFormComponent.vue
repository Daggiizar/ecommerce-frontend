<template>
  <div class="product-form">
    <h2>{{ editing ? 'Editar Producto' : 'Agregar Nuevo Producto' }}</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="product.name" required>
      </div>
      <div class="form-group">
        <label for="price">Precio:</label>
        <input type="number" id="price" v-model.number="product.price" required>
      </div>
      <div class="form-group">
        <label for="description">Descripción:</label>
        <textarea id="description" v-model="product.description"></textarea>
      </div>
      <div class="form-group">
        <label for="stock">Stock:</label>
        <input type="number" id="stock" v-model.number="product.stock" required>
      </div>
      <button type="submit">{{ editing ? 'Actualizar' : 'Guardar' }}</button>
      <button type="button" @click="cancel">Cancelar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductFormComponent',
  props: {
    initialProduct: {
      type: Object,
      default: () => ({ id: null, name: '', price: 0, description: '', stock: 0 })
    }
  },
  data() {
    return {
      product: { ...this.initialProduct },
      editing: !!this.initialProduct.id
    };
  },
  watch: {
    initialProduct: {
      handler(newProduct) {
        this.product = { ...newProduct };
        this.editing = !!newProduct.id;
      },
      deep: true
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit-product', this.product);
      this.resetForm();
    },
    cancel() {
      this.$emit('cancel');
      this.resetForm();
    },
    resetForm() {
      this.product = { id: null, name: '', price: 0, description: '', stock: 0 };
      this.editing = false;
    }
  }
}
</script>

<style scoped>
.product-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}
.product-form .form-group {
  margin-bottom: 1rem;
}
.product-form input,
.product-form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
