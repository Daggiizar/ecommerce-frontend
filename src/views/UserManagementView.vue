<template>
  <div class="user-management">
    <h1>Gestión de Usuarios</h1>
    <UserFormComponent
        v-if="currentUser"
        :initialUser="currentUser"
        @submit-user="handleUserSubmit"
        @cancel="handleCancel"
    />
    <hr />
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Correo Electrónico</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button @click="editUser(user)">Editar</button>
          <button @click="deleteUser(user.id)">Eliminar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserFormComponent from '@/components/UserFormComponent.vue';
import userService from '@/services/userService';

export default {
  name: 'UserManagementView',
  components: {
    UserFormComponent
  },
  data() {
    return {
      users: [],
      currentUser: null
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      userService.getUsers()
          .then(response => {
            this.users = response.data;
          })
          .catch(error => {
            console.error("Error fetching users:", error);
          });
    },
    handleUserSubmit(user) {
      const action = user.id ? userService.updateUser : userService.createUser;
      action(user)
          .then(() => {
            this.fetchUsers();
            this.currentUser = null;
          })
          .catch(error => {
            console.error("Error saving user:", error);
          });
    },
    editUser(user) {
      this.currentUser = { ...user };
    },
    deleteUser(userId) {
      userService.deleteUser(userId)
          .then(() => {
            this.fetchUsers();
          })
          .catch(error => {
            console.error("Error deleting user:", error);
          });
    },
    handleCancel() {
      this.currentUser = null;
    }
  }
}
</script>

<style scoped>
.user-management {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border: 1px solid #ccc;
}
th {
  background-color: #f5f5f5;
}
button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
