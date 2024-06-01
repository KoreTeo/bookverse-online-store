<script>
import ProfileSvg from './img/Profile.vue'
import OrderSvg from './img/Order.vue'
import CartSvg from './img/Cart.vue'

export default {
    components: { ProfileSvg, OrderSvg, CartSvg },
    methods: {
        redirectOrders() {
            this.$router.push('/profile/orders')
        },
        redirectCart() {
            this.$router.push('/cart')
        },
        redirectEdit() {
            this.$router.push('/profile/edit')
        },
        logout() {
            localStorage.clear()
            this.$router.push('/')
        }
    }
}
</script>
<template>
    <nav>
        <ul className="nav_panel">
            <li @click="redirectEdit" className="nav_panel__el" type="button">
                <ProfileSvg />
                <div className="nav_panel__text"><span className="nav_panel__choosed">Личные данные</span></div>
            </li>
            <li @click="redirectOrders" className="nav_panel__el" type="button">
                <OrderSvg />
                <div className="nav_panel__text">Заказы</div>
            </li>
            <li @click="redirectCart" className="nav_panel__el" type="button">
                <CartSvg />
                <div className="nav_panel__text">Корзина</div>
            </li>
            <li @click="logout" className="nav_panel__el" type="button">
                <div className="nav_panel__text">Выйти</div>
            </li>
        </ul>
    </nav>
</template>
<style>
.nav_panel {
    display: flex;
    flex-direction: column;
    list-style: none;
    row-gap: 18px;
}

.nav_panel__el {
    display: flex;
    border: 1px solid #000;
    align-items: center;
    border-radius: 10px;
    width: 571px;
    height: 94px;
    column-gap: 22px;
    padding-left: 34px;
    background: #f5f5f5;
    cursor: pointer;
}

.nav_panel__el:hover {
    opacity: 0.7;
}

.nav_panel__el:active{
    opacity: 0.5;
}

.nav_panel__el:last-child {
    padding-left: 85px;
}

.nav_panel__choosed {
    color: #000aff;
}

.nav_panel__text {
    font-weight: 400;
    font-size: 25px;
    line-height: 150%
}
</style>