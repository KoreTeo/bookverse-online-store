import { defineStore } from 'pinia'
import axios from 'axios'
import { useCartStore } from './cartStore'

export const useProductStore = defineStore({
  id: 'productstore',
  state: () => ({
    products : []
  }),
  actions: {
    async fetchCategoryProductsFromDB(category) {
      const cartstore = useCartStore()
      try {
        let products = [];
        products = await axios.post('http://localhost:3000/api/product/category',{
          category: category,
        }, {
          headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
        })
        .then((response) => {return response.data}).then((result) => products = result)
        console.log(products)
        products.forEach(i => {
          cartstore.cart.forEach(j => {
            if(i.id === j.productId) {
              i.isAdded = true
            }
            else i.isAdded = false
          })
        })
        console.log(products)
        return products;
      } catch (error) {
        console.error(error)
      }
    },
    async addToCart(product) {
      this.cart.push(product);
      console.log(this.cart)
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
      this.cart.push(product)
      try {
        const response = await axios.delete('http://localhost:3000/api/cart',
          {
            productId: product.id
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
          }
        )
      } catch (error) {
        console.error(error)
      }
    },
  },
})