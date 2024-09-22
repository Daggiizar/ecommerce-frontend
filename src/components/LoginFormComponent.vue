<template>
  <div class="login-form">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Iniciar Sesión</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import authService from '@/services/authService';

export default {
  name: 'LoginFormComponent',
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await authService.login({
          email: this.email,
          password: this.password
        });
        if (response.data.authenticated) {
          this.$emit('authenticated', true);
        } else {
          this.error = 'Credenciales incorrectas, intenta de nuevo.';
        }
      } catch (error) {
        this.error = 'Error al iniciar sesión, verifica tu conexión.';
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.login-form .form-group {
  margin-bottom: 15px;
}

.login-form input[type="email"],
.login-form input[type="password"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}
.login-form button:hover {
  background-color: #0056b3;
}

.login-form p {
  color: red;
}
</style>
