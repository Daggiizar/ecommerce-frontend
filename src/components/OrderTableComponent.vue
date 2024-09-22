<template>
  <div class="order-table">
    <h2>Lista de Órdenes</h2>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Cliente</th>
        <th>Fecha</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.user.name }}</td>
        <td>{{ formatDate(order.orderDate) }}</td>
        <td>{{ order.status }}</td>
        <td>
          <button @click="editOrder(order)">Editar</button>
          <button @click="deleteOrder(order.id)">Eliminar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OrderTableComponent',
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const d = new Date(date);
      return d.toLocaleDateString();
    },
    editOrder(order) {
      this.$emit('edit-order', order);
    },
    deleteOrder(orderId) {
      this.$emit('delete-order', orderId);
    }
  }
}
</script>

<style scoped>
.order-table {
  margin: 20px auto;
  max-width: 1000px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
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
