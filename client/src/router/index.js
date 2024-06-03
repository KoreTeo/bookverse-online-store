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
import PageNotFound from '../views/PageNotFound.vue'


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
    path: '/profile/orders/:id',
    name: 'OrderInfo',
    component: OrderInfoPage,
    props: true,
  },
  {
    path: '/catalog/product/:id',
    name: 'ProductInfo',
    component: ProductInfoPage,
    props: true,
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
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: PageNotFound,
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
