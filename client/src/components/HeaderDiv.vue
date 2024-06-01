<script>
import LogoSvg from './img/Logo.vue'
import SearchSvg from './img/Search.vue'
import ProfileSvg from './img/Profile.vue'
import BurgerBtnSvg from './img/BurgerBtn.vue'
import OrderSvg from './img/Order.vue'
import CartSvg from './img/Cart.vue'

export default {
    components: { LogoSvg, SearchSvg, BurgerBtnSvg, ProfileSvg, OrderSvg, CartSvg },
    methods: {
        redirectHome() {
            this.$router.push('/')
        },
        redirectCatalog() {
            this.$router.push('/catalog')
        },
        redirectAuthorize() {
            this.$router.push('/auth')
        },
        redirectProfile() {
            if (this.isAuthenticated()) {
                this.$router.push('/profile/edit')
            }
            else {
                this.$router.push('/auth')
            }
        },
        redirectOrders() {
            if (this.isAuthenticated()) {
                this.$router.push('/profile/orders')
            }
            else {
                this.$router.push('/auth')
            }
        },
        redirectCart() {
            if (this.isAuthenticated()) {
                this.$router.push('/cart')
            }
            else {
                this.$router.push('/auth')
            }
        },
        isAuthenticated() {
            if (localStorage.getItem('authToken')) {
                return true
            }
            else {
                return false
            }
        }
    }
}
</script>

<template>
    <header>
        <div className="header__left_part">
            <div>
                <LogoSvg />
            </div>
            <div className="header__logo_name" @click="redirectHome">
                <span className="logo_name__left">book</span>verse
            </div>
            <div className="header__search">
                <input type="text" placeholder="Найти любимую книгу" className="search__text">
                <div className="search__icon">
                    <SearchSvg />
                </div>
            </div>
        </div>
        <div className="header__right_part">
            <button @click="redirectCatalog" className="header__catalog_btn">
                <div>Каталог</div>
                <div>
                    <BurgerBtnSvg />
                </div>
            </button>
            <ul className="left_part__list">
                <li v-if="!isAuthenticated()" @click="redirectAuthorize" className="list__el">
                    <div>
                        <ProfileSvg />
                    </div>
                    <div className="list__el_text">
                        Войти
                    </div>
                </li>
                <li v-else @click="redirectProfile" className="list__el">
                    <div>
                        <ProfileSvg />
                    </div>
                    <div className="list__el_text">
                        Профиль
                    </div>
                </li>
                <li @click="redirectOrders" className="list__el">
                    <div>
                        <OrderSvg />
                    </div>
                    <div className="list__el_text">Заказы</div>
                </li>
                <li @click="redirectCart" className="list__el">
                    <div>
                        <div>
                            <CartSvg />
                        </div>
                        <div className="list__el_products_in_cart">2</div>
                        <!тут должен быть скрипт смены числа книг в корзине>
                    </div>
                    <div className="list__el_text">Корзина</div>
                </li>
            </ul>
        </div>
    </header>
</template>
<style>
header {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
    width: 1440px;
    height: 90px;
    margin: 0px 140px;
    padding: 0px 110px;
    display: flex;
    justify-content: space-between;
}

.header__left_part {
    display: flex;
    padding-top: 16px;
    column-gap: 17.5px;
}

.header__logo_name {
    font-weight: 400;
    font-size: 47px;
    line-height: 120%;
    color: #000aff;
    cursor: pointer;
}

.logo_name__left {
    text-transform: uppercase;
}

.header__search {
    border-radius: 10px;
    width: 400px;
    height: 50px;
    background: #d9d9d9;
    opacity: 0.5;
    display: flex;
    justify-content: space-between;
}

.search__text {
    text-align: center;
    background: none;
    border: none;
    margin-left: 10px;
}

.search__icon {
    margin-right: 18px;
    margin-top: 13px;
}

.header__right_part {
    display: flex;
}

.header__catalog_btn {
    display: flex;
    color: #fff;
    background-color: #000aff;
    border-radius: 10px;
    width: 144px;
    height: 46px;
    justify-content: center;
    align-items: center;
    align-self: center;
    column-gap: 20px;
    margin-right: 20px;
    cursor: pointer;
}

.header__catalog_btn:hover {
    opacity: 0.7;
}

.header__catalog_btn:active {
    opacity: 0.5;
}

.left_part__list {
    list-style: none;
    display: flex;
    column-gap: 40px;
    margin-top: 18px;
    margin-left: 11px;
}

.list__el {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
    position: relative;
    cursor: pointer;
}

.list__el_text {
    margin-top: -10px;
}

.list__el_text:hover {
    color: #0f00bd;
}

.list__el_products_in_cart {
    width: 15px;
    height: 15px;
    font-weight: 400;
    font-size: 11px;
    position: absolute;
    z-index: 1;
    border: 2px solid #ffF;
    border-radius: 100%;
    background-color: #0f00bd;
    color: #fff;
    margin-top: -37px;
    margin-left: 15px;
    text-align: center;
    align-content: center;
}
</style>