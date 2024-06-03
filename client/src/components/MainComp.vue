<script>
import ArrowLeft from './img/ArrowLeft.vue';
import ArrowRight from './img/ArrowRight.vue';
import MainCompComp from './MainCompComp.vue';
import { useProductStore } from '@/stores/productStore';

export default {
  components: { ArrowLeft, ArrowRight, MainCompComp },
  setup() {
    const productstore = useProductStore();
    return {productstore};
  },
  props: {
    title: String,
    title: String,
    title: String,
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4 // Number of items to show per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    listStyle() {
      let translateX;
      if (this.currentPage === this.totalPages && (this.products.length % this.itemsPerPage) !== 0){
        translateX = -(this.currentPage - 1) * (300 + 80) * (this.products.length % this.itemsPerPage);
      }
      else {
        translateX = -(this.currentPage - 1) * (300 + 80) * this.itemsPerPage;
      }
      return {
        transform: `translateX(${translateX}px)`
      };
    }
  },
  methods: {
    next() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prev() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  }
};
</script>

<template>
  <div class="main__all">
    <p class="main__title">{{ this.title }}</p>
    <div class="main__with_arrows">
      <button class="main__arrow" @click="prev" :disabled="currentPage === 1">
        <ArrowLeft />
      </button>
      <div class="main__list-container">
        <div class="main__list" :style="listStyle">
          <MainCompComp v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
      <button class="main__arrow" @click="next" :disabled="currentPage === totalPages">
        <ArrowRight />
      </button>
    </div>
  </div>
</template>

<style>
.main__with_arrows {
  display: flex;
  align-items: center;
}

.main__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightblue;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  padding-left: 4px;
  background-color: lightcyan;
  cursor: pointer;
}

.main__arrow:hover {
  opacity: 0.7;
}

.main__arrow:active {
  opacity: 0.5;
}

.main__arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.main__all {
  display: flex;
  flex-direction: column;
}

.main__title {
  font-weight: 400;
  font-size: 30px;
  line-height: 150%;
  margin-bottom: 20px;
}

.main__list-container {
  overflow: hidden;
  width: calc(300px * 4 + 80px * 3);
}

.main__list {
  display: flex;
  transition: transform 0.5s ease;
}

.main__list>* {
  flex: 0 0 300px;
  margin-right: 80px;
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