<script>
import MainCompDiv from '../components/MainComp.vue';
import FooterDiv from '@/components/FooterDiv.vue';
import HeaderDiv from '@/components/HeaderDiv.vue';
import axios from 'axios';
import { useProductStore } from '@/stores/productStore';

export default {
  components: { MainCompDiv, HeaderDiv, FooterDiv },

  data() {
    return {
      productsNew: [],
      productsBest: [],
      productsPre: [],
      titles: ['Новинки', 'Бестселлеры', 'Предзаказы'],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.post('http://localhost:3000/api/product/category/', {
          category: 'Новинки',
        });
        this.productsNew = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      try {
        const response = await axios.post('http://localhost:3000/api/product/category/', {
          category: 'Бестселлеры',
        });
        this.productsBest = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      try {
        const response = await axios.post('http://localhost:3000/api/product/category/', {
          category: 'Предзаказы',
        });
        this.productsPre = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  }
};
</script>

<template>
  <div class="main__main_page">
    <MainCompDiv :title="titles[0]" :products="productsNew" />
    <MainCompDiv :title="titles[1]" :products="productsBest" />
    <MainCompDiv :title="titles[2]" :products="productsPre" />
  </div>
</template>

<style>
.main__main_page {
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  width: 1240px;
  align-items: center;
}

.main {
  display: flex;
  row-gap: 80px;
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