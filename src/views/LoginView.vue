<template>
  <div class="login-view">
    <h1>Inicia sesión en tu cuenta</h1>
    <LoginFormComponent @authenticated="handleAuthentication" />
    <p>No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link></p>
  </div>
</template>

<script>
import LoginFormComponent from '@/components/LoginFormComponent.vue';

export default {
  name: 'LoginView',
  components: {
    LoginFormComponent
  },
  methods: {
    handleAuthentication(status) {
      if (status) {
        this.$router.push({ name: 'home' });
      }
    }
  }
}
</script>

<style scoped>
.login-view {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  text-align: center;
}

.login-view h1 {
  margin-bottom: 20px;
}
</style>
