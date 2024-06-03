<script>
import ImageOrderInfo from '../components/ImageOrderInfo.vue'

export default {
  components: { ImageOrderInfo },
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirectToOrderInfo(id) {
      this.$router.push({ path: `/profile/orders/${id}` })
    },
    transformDate(date) {
      let temp = date.split("T")[0].split("-").reverse();
      temp[0] = temp.splice(1, 1, temp[0])[0];
      return temp.join(".");
    },
  }
}
</script>
<template>
  <div @click="redirectToOrderInfo(order.id)" className="all_orders_page__order">
    <div className="all_orders_page__status">{{ order.status }}</div>
    <div className="all_orders_page__order_title">Заказ №{{ order.id }} от {{ transformDate(order.order_date) }}</div>
    <div className="all_orders_page__extras">
      <div className="all_orders_page__extras_el">Оплата банковской картой</div>
      <div className="all_orders_page__extras_el">Доставка: Самовывоз</div>
    </div>
    <div className="all_orders_page__extras_el">{{ order.ship_to }}</div>
    <div className="all_orders_page__bottom_info">
      <ul className="all_orders_page__images">
        <ImageOrderInfo v-for="order_detail in order.order_details" :order_detail="order_detail" />
      </ul>
      <div className="all_orders_page__order_cost">{{ order.total }} руб.</div>
    </div>
  </div>
</template>

<style>
.all_orders_page__order {
  width: 707px;
  height: 346px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid;
  padding: 22px 40px;
  margin-bottom: 50px;
  cursor: pointer;
}

.all_orders_page__order:hover {
  opacity: 0.7;
}

.all_orders_page__order:active {
  opacity: 0.5;
}

.all_orders_page__status {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  border-radius: 10px;
  width: 152px;
  height: 32px;
  background: #d9d9d9;
  text-align: center;
  padding-top: 4px;
  margin-bottom: 12px;
}

.all_orders_page__order_title {
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  margin-bottom: 12px;
}

.all_orders_page__extras {
  display: flex;
  column-gap: 14px;
  margin-bottom: 12px;

}

.all_orders_page__extras_el {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
}

.all_orders_page__bottom_info {
  display: flex;
  justify-content: space-between;
}

.all_orders_page__images {
  display: flex;
  column-gap: 50px;
  margin-top: 42px;
}

.all_orders_page__order_cost {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  align-self: flex-end;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
}

button,
input {
  color: currentColor;
  font-family: inherit;
  font-size: inherit;
}

ul,
ol {
  list-style: none;
}

.visually-hidden {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
}
</style>