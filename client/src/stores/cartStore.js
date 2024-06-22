import { defineStore } from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore({
  id: 'cartstore',
  state: () => ({
    cart : []
  }),
  getters: {
    total: (state) => {
      let total = 0;
      state.cart.forEach(i => {
        total += i.price * i.quantity
      })
      return total
    }, 
    totalQuantity: (state) => {
      let totalQuantity = 0;
      state.cart.forEach(i => {
        totalQuantity += i.quantity
      })
      return totalQuantity
    } 
  },
  actions: {
    async fetchCartDetailsFromDB() {
      try {
        this.cart = [];
        const response = await axios.get('http://localhost:3000/api/cart', {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
        })
        const card_details = response.data;
        card_details.forEach(async i => {
          const response1 = await axios.get(`http://localhost:3000/api/product/${i.productId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
        })
        response1.data.quantity = i.quantity
        this.cart.push(response1.data);
        })
      } catch (error) {
        console.error(error)
      }
    },
    async addToCart(product) {
      product.quantity = 1;
      this.cart.push(product);
      try {
        const response = await axios.post('http://localhost:3000/api/cart',
          {
            productId: product.id,
            quantity: '1'
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
          }
        )
      } catch (error) {
        console.error(error)
      }
    },
    async removeFromCart(product) {
      try {
        const response = await axios.post('http://localhost:3000/api/cart/delete',
          {
            productId: product.id
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
          }
        )
        this.cart.splice(this.cart.indexOf(product), 1)
      } catch (error) {
        console.error(error)
      }
    },
    async clearCart() {
      try {
        this.cart.forEach(async i => {
          this.removeFromCart(i)
        })
      } catch (error) {
        console.error(error)
      }
    },
    fetchCartProductsId() {
      let ids = [];
      this.cart.forEach(i => {
        ids.push(i.id);
      })
      return ids;
    },
    async changeQuantity(product) {
      try {
        const response = await axios.post('http://localhost:3000/api/cart/changeQuantity',
          {
            productId: product.id,
            quantity: product.quantity
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
          }
        )
      } catch (error) {
        console.error(error)
      }
    }
  },
})