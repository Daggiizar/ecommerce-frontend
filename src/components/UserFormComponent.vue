<template>
  <div class="user-form">
    <h2>{{ editing ? 'Editar Usuario' : 'Agregar Nuevo Usuario' }}</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="user.name" required>
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="user.email" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="user.password" :required="!editing">
      </div>
      <button type="submit">{{ editing ? 'Actualizar' : 'Guardar' }}</button>
      <button type="button" @click="cancel">Cancelar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserFormComponent',
  props: {
    initialUser: {
      type: Object,
      default: () => ({ id: null, name: '', email: '', password: '' })
    }
  },
  data() {
    return {
      user: { ...this.initialUser },
      editing: !!this.initialUser.id
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit-user', this.user);
      this.resetForm();
    },
    cancel() {
      this.$emit('cancel');
      this.resetForm();
    },
    resetForm() {
      this.user = { id: null, name: '', email: '', password: '' };
    }
  }
}
</script>

<style scoped>
.user-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.user-form .form-group {
  margin-bottom: 15px;
}
.user-form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  padding: 10px 15px;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
}
button:hover {
  background-color: #0056b3;
}
</style>
