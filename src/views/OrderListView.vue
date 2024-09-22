<template>
  <div class="order-list">
    <h1>Gestión de Órdenes</h1>
    <OrderTableComponent
        :orders="orders"
        @edit-order="editOrder"
        @delete-order="deleteOrder"
    />
  </div>
</template>

<script>
import OrderTableComponent from '@/components/OrderTableComponent.vue';
import orderService from '@/services/orderService';

export default {
  name: 'OrderListView',
  components: {
    OrderTableComponent
  },
  data() {
    return {
      orders: [],
      currentOrder: null
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders() {
      orderService.getOrders()
          .then(response => {
            this.orders = response.data;
          })
          .catch(error => {
            console.error("Error fetching orders:", error);
          });
    },
    editOrder(order) {
      this.currentOrder = { ...order };
    },
    deleteOrder(orderId) {
      orderService.deleteOrder(orderId)
          .then(() => {
            this.fetchOrders();
          })
          .catch(error => {
            console.error("Error deleting order:", error);
          });
    }
  }
}
</script>

<style scoped>
.order-list {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}
</style>
