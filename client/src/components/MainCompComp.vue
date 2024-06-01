<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <li class="main__list_el">
    <img :src="`http://localhost:3000/${product.img_link}`" class="main__list_img" :alt="product.name">
    <p class="main__list_book_name">{{ product.name }}</p>
    <p class="main__list_book_author">{{ product.author }}</p>
    <div class="main__list_info">
      <button class="main__list_btn" type="submit">В корзину</button>
      <p class="main__list_cost">{{ product.price }} руб.</p>
    </div>
  </li>
</template>

<style>
.main__list_el {
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
}

.main__list_img {
  width: 200px;
  height: 296px;
  align-self: center;
}

.main__list_book_name {
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  align-self: center;
  margin-top: 4px;

}

.main__list_book_author {
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  align-self: center;
  margin-top: 4px;
}

.main__list_info {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}

.main__list_btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  background: #000aff;
  border-radius: 10px;
  color: #fff;
  width: 115px;
  height: 32px;
  border: none;
  cursor: pointer;
}

.main__list_btn:hover{
  opacity: 0.7;
}

.main__list_btn:active{
  opacity: 0.5;
}

.main__list_cost {
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-self: center;
}
</style>