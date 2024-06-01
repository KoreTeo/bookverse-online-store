<script>
export default {

}
</script>
<template>
  <div className="orders_page__order_content">
    <div className="order_content__left_part">
      <div>
        <img src="./img/Book4.jpg" className="order_content__img">
      </div>
      <div className="order_content__info">
        <div className="order_content__info_title">Название данной книги</div>
        <div className="order_content__info_author">Автор книги</div>
        <div className="order_content__info_weight">
          <div className="order_content__info_weight_title">Вес:</div>
          <div className="order_content__info_weight_count">Какой-то</div>
        </div>
      </div>
    </div>
    <div className="order_content__right_part">
      <div>
        <div className="order_content__count">2</div>
        <div className="order_content__count_units">шт</div>
      </div>
      <div className="order_content__cost">2000 ₽</div>
    </div>
  </div>
</template>
<style>
.orders_page__order_content {
  width: 900px;
  height: 250px;
  padding: 15px 30px;
  border-bottom: 1px solid;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}

.order_content__left_part {
  display: flex;
  column-gap: 20px;
}

.order_content__right_part {
  display: flex;
  column-gap: 50px;
  margin-top: 45px;
}

.order_content__img {
  width: 150px;
  height: 220px;
}

.order_content__info_title {
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
}

.order_content__info_author {
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  margin-top: 10px;
}

.order_content__info_weight {
  display: flex;
  column-gap: 4px;
  margin-top: 10px;
}

.order_content__info_weight_title {
  font-weight: 400;
  font-size: 16px;
  line-height: 88%;
  color: #121212;
  opacity: 0.4;
}

.order_content__info_weight_count {
  font-weight: 400;
  font-size: 16px;
  line-height: 88%;
  color: #121212;
}

.order_content__count {
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
}

.order_content__count_units {
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: rgba(0, 0, 0, 0.5);
  margin-left: -2px;
}

.order_content__cost {
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
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