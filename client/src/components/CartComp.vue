<script>
import TrashIcon from './img/Trash.vue';
import { useCartStore } from '../stores/cartStore.js';

export default {
  components: { TrashIcon },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup() {
    const cartstore = useCartStore();
    return { cartstore };
  },
  methods: {
    deleteFromCart(product) {
      this.cartstore.removeFromCart(product)
    },
    plusQuantity(product) {
      product.quantity += 1;
      this.cartstore.changeQuantity(product)
    },
    minusQuantity(product) {
      if(product.quantity === 1) {
        this.cartstore.removeFromCart(product)
      }
      else {
        product.quantity -= 1;
       this.cartstore.changeQuantity(product)
      }
    },
  }
}
</script>
<template>
  <div className="cart_page__cart_content">
    <div className="cart_content__left_part">
      <div>
        <img :src="`http://localhost:3000/${product.img_link}`" className="cart_content__img">
      </div>
      <div className="cart_content__info">
        <div className="cart_content__info_main_title">{{ product.name }}</div>
        <div className="cart_content__info_author">{{ product.author }}</div>
        <ul className="cart_content__info">
          <li className="cart_content__info_el">
            <p className="cart_content__info_title">Вес:</p>
            <p className="cart_content__info_count">Какой-то</p>
          </li>
          <li className="cart_content__info_el">
            <p className="cart_content__info_title">Издательство:</p>
            <p className="cart_content__info_count">Какоe-то</p>
          </li>
          <li className="cart_content__info_el">
            <p className="cart_content__info_title">Жанр:</p>
            <p className="cart_content__info_count">{{ product.genre }}</p>
          </li>
          <li className="cart_content__info_el">
            <p className="cart_content__info_title">Автор:</p>
            <p className="cart_content__info_count">{{ product.author }}</p>
          </li>
          <li className="cart_content__info_el">
            <p className="cart_content__info_title">Год издания:</p>
            <p className="cart_content__info_count">2023</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="cart_content__right_part">
      <div>
        <p className="cart_content__cost">{{ product.price }}</p>
        <p className="cart_content__count_units">цена за 1 шт</p>
      </div>
      <div>
        <div className="cart_content__units">
          <p @click="minusQuantity(product)" className="cart_content__units_oper minus">-</p>
          <p className="cart_content__count">{{ product.quantity }}</p>
          <p @click="plusQuantity(product)" className="cart_content__units_oper plus">+</p>
        </div>
        <p className="cart_content__count_units">шт</p>
      </div>
      <p className="cart_content__cost">{{product.price * product.quantity}} ₽</p>
    </div>
    <div @click="deleteFromCart(product)" className="cart_content__trash">
      <TrashIcon />
    </div>
  </div>
</template>
<style>
.cart_page__cart_content {
  width: 900px;
  height: 250px;
  padding: 15px 30px;
  border-bottom: 1px solid;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}

.cart_content__left_part {
  display: flex;
  column-gap: 20px;
}

.cart_content__right_part {
  display: flex;
  column-gap: 40px;
  margin-top: 45px;
}

.cart_content__img {
  width: 150px;
  height: 220px;
}

.cart_content__info_main_title {
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
}

.cart_content__info_author {
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  margin-top: 10px;
}

.cart_content__info {
  display: flex;
  margin-top: 10px;
  row-gap: 12px;
  flex-direction: column;
}

.cart_content__info_el {
  display: flex;
  column-gap: 4px;
}

.cart_content__info_title {
  font-weight: 400;
  font-size: 16px;
  line-height: 88%;
  color: #121212;
  opacity: 0.4;
}

.cart_content__info_count {
  font-weight: 400;
  font-size: 16px;
  line-height: 88%;
  color: #121212;
}

.cart_content__count {
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  background-color: #D9D9D9;
  padding: 1px 18px;
  border-radius: 5px;
}

.cart_content__units {
  display: flex;
}

.cart_content__units_oper {
  width: 14px;
  height: 14px;
  color: #000;
  font-weight: 800;
  font-size: 22px;
  padding-left: 2px;
}

.cart_content__count_units {
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}

.cart_content__cost {
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  margin-left: 5px;
}

.cart_content__trash {
  position: absolute;
  display: flex;
  align-self: flex-end;
  margin-left: 820px;
  cursor: pointer;
}

.cart_content__trash:hover {
  opacity: 0.7;
}

.cart_content__trash:active {
  opacity: 0.5;
}

.minus,
.plus {
  cursor: pointer;
}

.minus:hover,
.plus:hover {
  font-weight: 600;
}

.minus:active,
.plus:active {
  font-weight: 400;
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