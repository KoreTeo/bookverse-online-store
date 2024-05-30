<script>
export default {
}
</script>
<template>
  <div className="all_orders_page__order">
    <div className="all_orders_page__status">Выполнен</div>
    <div className="all_orders_page__order_title">Заказ №54333434 от 21.04.2024</div>
    <div className="all_orders_page__extras">
      <div className="all_orders_page__extras_el">Оплата банковской картой</div>
      <div className="all_orders_page__extras_el">Доставка: Самовывоз</div>
    </div>
    <div className="all_orders_page__extras_el">Адрес г. Красноярск, Красноясркий край, Россия</div>
    <div className="all_orders_page__bottom_info">
      <ul className="all_orders_page__images">
        <li className="all_orders_page__images_el">
          <img src="./img/Book4.jpg" className="all_order_content__img">
        </li>
        <li className="all_orders_page__images_el">
          <img src="./img/Book4.jpg" className="all_order_content__img">
        </li>
      </ul>
      <div className="all_orders_page__order_cost">3243 руб.</div>
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
}

.all_orders_page__order:active {
  opacity: 0.8;
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

.all_order_content__img {
  width: 75px;
  height: 102px;
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