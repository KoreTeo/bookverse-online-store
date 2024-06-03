<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cartStore.js';
const cartstore = useCartStore();

const props = defineProps({
    product: {
        type: Object
    },
})

const isInCart = computed(() => {
    return cartstore.cart.find(item => item.id === props.product.id)
})

function addToCart() {
    cartstore.addToCart(props.product);
}

</script>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        redirectToBookInfo() {
            this.$router.push({ path: `/catalog/product/${this.product.id}` })
        },
        redirectToCart() {
            this.$router.push({ path: `/cart` })
        }
    }
}
</script>
<template>
    <li className="catalog__list_el">
        <div>
            <img @click="redirectToBookInfo" :src="`http://localhost:3000/${product.img_link}`"
                className="list_el__img">
        </div>
        <div className="list_el_info">
            <h2 @click="redirectToBookInfo" className="list_el__info_title">{{ product.name }}</h2>
            <div className="list_el__info_about">
                <p className="info_about__description">{{ product.description }}</p>
                <ul className="info_about__list">
                    <li className="info_about__list_el">
                        <p className="info_about__list_el_name">Жанр:</p>
                        <p className="info_about__list_el_value">{{ product.genre }}</p>
                    </li>
                    <li className="info_about__list_el">
                        <p className="info_about__list_el_name">Автор:</p>
                        <p className="info_about__list_el_value">{{ product.author }}</p>
                    </li>
                </ul>
                <div className="info_about__extras">
                    <p className="info_about__cost">{{ product.price }} руб.</p>
                    <button @click="addToCart" v-if="!isInCart" className="info_about__btn" type="button">Добавить</button>
                    <button @click="redirectToCart" v-else className="info_about__btn info_about__btn_delete" type="button">В корзину</button>
                </div>
            </div>
        </div>
    </li>
</template>
<style>
.catalog__list_el {
    display: flex;
    background: #d9d9d9;
    width: 900px;
    height: 250px;
    padding: 15px 28px;
    column-gap: 40px;
}

.list_el__img {
    width: 150px;
    height: 220px;
    cursor: pointer;
}

.list_el_info {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}

.list_el__info_title {
    font-weight: 500;
    font-size: 22px;
    line-height: 120%;
    color: #000;
    margin-top: 10px;
    cursor: pointer;
}

.list_el__info_title:hover {
    opacity: 0.7;
}

.list_el__info_about {
    display: flex;
    column-gap: 40px;
}

.info_about__description {
    width: 300px;
    max-height: 156px;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    text-align: justify;
    color: rgba(0, 0, 0, 1);
    overflow:hidden;
}

.info_about__list {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
}

.info_about__list_el {
    display: flex;
    column-gap: 4px;
}

.info_about__list_el_name {
    font-weight: 400;
    font-size: 16px;
    line-height: 88%;
    color: #121212;
    opacity: 0.4;
}

.info_about__list_el_value {
    font-weight: 400;
    font-size: 16px;
    line-height: 88%;
    color: #121212;
}

.info_about__extras {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
}

.info_about__cost {
    margin-top: 10px;
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    color: #000;
}

.info_about__btn {
    width: 115px;
    height: 32px;
    background: #000aff;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #fff;
    cursor: pointer;
}

.info_about__btn:hover {
    opacity: 0.7;
}

.info_about__btn:hover {
    opacity: 0.5;
}

.info_about__btn_delete {
    color: black;
    background: lightblue;
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