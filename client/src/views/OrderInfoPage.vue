<script>
import ProfileNavigationDiv from '../components/ProfileNavigation.vue'
import OrderUnitDiv from '../components/OrderUnit.vue';
import axios from 'axios';

export default {
  components: { ProfileNavigationDiv, OrderUnitDiv },
  data() {
    return {
      order: {},
    };
  },
  created() {
    this.fetchOrder();
  },
  methods: {
    async fetchOrder() {
      try {
        const response = await axios.get(`http://localhost:3000/api/order/${this.$route.params.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
        }
        );
        this.order = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    transformDate(order_date) {
      let temp = order_date.split("T")[0].split("-").reverse();
      return temp[1] + '.' + temp[0] + '.' + temp[2];
    }
  },
  computed: {
    countQuantity() {
      return this.order.order_details.length
    }
  }
}
</script>
<template>
  <div className="main_orders">
    <ProfileNavigationDiv />
    <div className="orders_page">
      <div className="orders_page__title">Страница заказа</div>
      <div className="orders_page__order">
        <div className="orders_page__status">{{ order.status }}</div>
        <div className="orders_page__order_title">Заказ №{{ order.id }} от {{ transformDate(order.order_date) }}</div>
        <div className="orders_page__extras">
          <div className="orders_page__extras_el">Оплата банковской картой</div>
          <div className="orders_page__extras_el">Доставка: Самовывоз</div>
        </div>
        <div className="orders_page__extras_el">Адрес: {{ order.ship_to }}</div>
      </div>
      <div className="orders_page__title">Состав заказа</div>
      <OrderUnitDiv v-for="order_detail in order.order_details" :order_detail="order_detail"/>
      <ul className="orders_page__order_data">
        <li className="order_data__el">
          <div>Кол-во товаров:</div>
          <div>{{ this.countQuantity }} штуки</div>
        </li>
        <li className="order_data__el">
          <div>Итог:</div>
          <div>{{ order.total }} руб.</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.main_orders {
  display: flex;
  column-gap: 78px;
}

.orders_page__title {
  font-weight: 400;
  font-size: 44px;
  line-height: 120%;
  margin-bottom: 15px;
}

.orders_page__order {
  width: 900px;
  height: 206px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid;
  padding: 27px 40px;
  margin-bottom: 50px;
}

.orders_page__status {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  border-radius: 10px;
  width: 152px;
  height: 32px;
  background: #d9d9d9;
  text-align: center;
  padding-top: 4px;
}

.orders_page__order_title {
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  padding-top: 9px;
}

.orders_page__extras {
  display: flex;
  column-gap: 14px;

}

.orders_page__extras_el {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  padding-top: 12px;
}


.orders_page__order_data {
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 200px;
  padding: 49px 237px;
  row-gap: 37px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.order_data__el {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
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