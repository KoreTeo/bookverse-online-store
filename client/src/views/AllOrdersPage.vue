<script>
import ProfileNavigationDiv from '../components/ProfileNavigation.vue'
import OrderUnitDiv from '../components/OrderUnit.vue';
import ArrowIcon from '../components/img/Arrow.vue'
import ArrowUpIcon from '../components/img/ArrowUP.vue'
import AllOrdersInfoDiv from '../components/OrderInfo.vue'
import axios from 'axios';

export default {
  components: { ProfileNavigationDiv, OrderUnitDiv, ArrowIcon, ArrowUpIcon, AllOrdersInfoDiv },
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await axios.get('http://localhost:3000/api/order', {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
        }
        );
        this.orders = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  }
};
</script>
<template>
  <div className="main_all_orders">
    <ProfileNavigationDiv />
    <div className="all_orders_page">
      <div className="all_orders_page__title">Заказы</div>
      <ul className="all_orders_page__list">
        <li className="all_orders_page__list_el">
          <div className="list_el__text">Все</div>
          <button className="icon_btn down" type="button">
            <ArrowIcon />
          </button>
        </li>
        <li className="all_orders_page__list_el">
          <div className="list_el__text">Сначала новые</div>
          <button className="icon_btn down" type="button">
            <ArrowIcon />
          </button>
        </li>
        <li className="all_orders_page__list_el">
          <div className="list_el__text">Сначала старые</div>
          <button className="icon_btn down" type="button">
            <ArrowIcon />
          </button>
        </li>
      </ul>
      <AllOrdersInfoDiv v-for="order in orders" :order="order"/>
    </div>
  </div>
</template>
<style>
.main_all_orders {
  display: flex;
  column-gap: 162px;
}

.all_orders_page__title {
  font-weight: 400;
  font-size: 44px;
  line-height: 120%;
  margin-bottom: 21px;
}

.all_orders_page__list {
  display: flex;
  column-gap: 40px;
}

.all_orders_page__list_el {
  display: flex;
  column-gap: 7px;
  margin-bottom: 21px;
}

.list_el__text {
  margin-top: 1px;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
}

.icon_btn {
  border: none;
  background-color: #fff;
}

.icon_btn:hover {
  color: #000aff;

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