<script>
import axios from 'axios';
export default {
  data() {
    return {
      product: {}
    }
  },
  props: {
    order_detail: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.image_link = this.fetchImages(this.order_detail);
  },
  methods: {
    async fetchImages(order_detail) {
      try {
        const response = await axios.get(`http://localhost:3000/api/product/${order_detail.productId}`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
          }
        )
        this.product = response.data;
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <li className="all_orders_page__images_el">
    <img :src="`http://localhost:3000/${product.img_link}`" className="all_order_content__img">
  </li>
</template>

<style>
.all_order_content__img {
  width: 75px;
  height: 102px;
}
</style>