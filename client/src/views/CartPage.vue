<script setup>
</script>

<script>
import CartCompDiv from '../components/CartComp.vue';
import TrashIcon from '../components/img/Trash.vue';
import { useCartStore } from '../stores/cartStore.js';

export default {
  components: { CartCompDiv, TrashIcon },
  setup() {
    const cartstore = useCartStore();
    return { cartstore };
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    redirectToMakeOrder() {
      this.$router.push({ path: `/cart/order` })
    },
    clearCart() {
      this.cartstore.clearCart();
    },
    fetchProducts() {
      this.products = this.cartstore.cart
    }
  },
}
</script>
<template>
  <div className="main_page__cart">
    <div className="cart__left_part">
      <div className="cart__up_side">
        <p className="cart__title">Корзина</p>
        <div @click="clearCart" className="cart__clean_trash">
          <div className="cart__trach_icon_title">
            <TrashIcon />
          </div>
          <p className="cart__trash_title">Очистить корзину</p>
        </div>
      </div>
      <CartCompDiv v-for="product in products" :key="product.id" :product="product" />
    </div>
    <div className="cart__right_part">
      <ul className="cart__right_part_list">
        <li className="cart__right_part_list_el">
          <p className="cart__list_el_text">Кол-во товаров:</p>
          <p className="cart__list_el_text">{{cartstore.totalQuantity}} штуки</p>
        </li>
        <li className="cart__right_part_list_el">
          <p className="cart__list_el_text">Общий вес:</p>
          <p className="cart__list_el_text">1000 г</p>
        </li>
        <li className="cart__right_part_list_el">
          <p className="cart__list_el_text">Итог:</p>
          <p className="cart__list_el_text">{{ cartstore.total }} руб.</p>
        </li>
      </ul>
      <button @click="redirectToMakeOrder" className="cart__btn" type="submit">Оформить заказ</button>
    </div>
  </div>
</template>
<style>
.main_page__cart {
  display: flex;
  column-gap: 90px;
}

.cart__left_part {
  display: flex;
  flex-direction: column;
}

.cart__up_side {
  display: flex;
  justify-content: space-between;
}

.cart__title {
  font-weight: 400;
  font-size: 44px;
  line-height: 120%;
  margin-bottom: 20px;
}

.cart__clean_trash {
  display: flex;
  column-gap: 15px;
  align-items: center;
  cursor: pointer;
}

.cart__trash_title {
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #1400ff;
}

.cart__clean_trash:hover {
  opacity: 0.7;
}

.cart__clean_trash:active {
  opacity: 0.5;
}

.cart__right_part {
  width: 790px;
  height: 452px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cart__right_part_list {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.cart__right_part_list_el {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
}

.cart__right_part_list_el:last-child {
  font-size: 36px;
}

.cart__btn {
  display: flex;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  border-radius: 20px;
  color: #fff;
  width: 310px;
  height: 60px;
  background: #1400ff;
  justify-content: center;
  align-items: center;
  align-self: center;
  cursor: pointer;
}

.cart__btn:hover {
  opacity: 0.7;
}

.cart__btn:active {
  opacity: 0.5;
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