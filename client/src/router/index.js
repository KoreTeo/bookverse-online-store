import { createWebHistory, createRouter } from 'vue-router'
import AdminPanelPage from '../views/AdminPanelPage.vue'
import AllOrdersPage from '../views/AllOrdersPage.vue'
import AuthorizationPage from '../views/AuthorizationPage.vue'
import CartPage from '../views/CartPage.vue'
import CatalogPage from '../views/CatalogPage.vue'
import HomePage from '../views/HomePage.vue'
import MakeOrderPage from '../views/MakeOrderPage.vue'
import OrderInfoPage from '../views/OrderInfoPage.vue'
import ProductInfoPage from '../views/ProductInfoPage.vue'
import ProfileEditPage from '../views/ProfileEditPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'


const routes = [
  {
    path: '/admin',
    name: 'AdminPanel',
    component: AdminPanelPage,
  },
  {
    path: '/profile/orders',
    name: 'AllOrders',
    component: AllOrdersPage,
  },
  {
    path: '/auth',
    name: 'Authorization',
    component: AuthorizationPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogPage,
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/cart/order',
    name: 'MakeOrder',
    component: MakeOrderPage,
  },
  {
    path: '/profile/orders/order',
    name: 'OrderInfo',
    component: OrderInfoPage,
  },
  {
    path: '/catalog/product',
    name: 'ProductInfo',
    component: ProductInfoPage,
  },
  {
    path: '/profile/edit',
    name: 'ProfileEdit',
    component: ProfileEditPage,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationPage,
  },
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
