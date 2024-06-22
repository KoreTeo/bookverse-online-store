<script setup>
import { computed } from 'vue';
import {useRouter} from 'vue-router'
import { useCartStore } from '../stores/cartStore.js';

const cartstore = useCartStore();
const router = useRouter()
const authorizedStore = useAuthorizedStore();

const props = defineProps({
  product: {
    type: Object
  },
})

const isInCart = computed(() => {
  return cartstore.cart.find(item => item.id === props.product.id)
})

function addToCart() {
  authorizedStore.checkAuthorize()
  if (authorizedStore.isAuthorized) {
    cartstore.addToCart(props.product);
  }
  else {
    router.push({ path: `/auth` })
  }
}
</script>

<script>
import { useCartStore } from '../stores/cartStore.js';
import { useAuthorizedStore } from '@/stores/isAuthorised.js';

export default {
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  methods: {
    redirectToBookInfo() {
      this.$router.push({ path: `/catalog/product/${this.product.id}` })
    },
    redirectToCart() {
      this.$router.push({ path: `/cart` })
    }
  },
};
</script>

<template>
  <li class="main__list_el">
    <img :src="`http://localhost:3000/${product.img_link}`" @click="redirectToBookInfo" class="main__list_img"
      :alt="product.name">
    <p @click="redirectToBookInfo" class="main__list_book_name">{{ product.name }}</p>
    <p class="main__list_book_author">{{ product.author }}</p>
    <div class="main__list_info">
      <button v-if="!isInCart" @click="addToCart" class="main__list_btn" type="button">Добавить</button>
      <button v-else @click="redirectToCart" class="main__list_btn main__list_btn_delete" type="button">В
        корзину</button>
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
  cursor: pointer;
}

.main__list_img {
  width: 200px;
  height: 296px;
  align-self: center;
  cursor: pointer;
}

.main__list_img:hover {
  opacity: 0.7;
}

.main__list_img:active {
  opacity: 0.5;
}

.main__list_book_name {
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  align-self: center;
  margin-top: 4px;
  cursor: pointer;
  text-align: center;
}

.main__list_book_name:hover {
  opacity: 0.7;
}

.main__list_book_name:active {
  opacity: 0.5;
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

.main__list_btn:hover {
  opacity: 0.7;
}

.main__list_btn:active {
  opacity: 0.5;
}

.main__list_btn_delete {
  color: black;
  background: lightblue;
}

.main__list_cost {
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-self: center;
}
</style>