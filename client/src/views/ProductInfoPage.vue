<script>
import axios from 'axios';

export default {
    data() {
        return {
            product: {},
        };
    },
    created() {
        this.fetchProduct();
    },
    methods: {
        async fetchProduct() {
            try {
                const response = await axios.get(`http://localhost:3000/api/product/${this.$route.params.id}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
                }
                );
                this.product = response.data;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
    },
}
</script>
<template>
    <div className="book_info__main_container">
        <h1 className="main_container__title">{{product.name}}</h1>
        <div className="main_container__info">
            <h3 className="main_container__author">{{product.author}}</h3>
            <div className="info">
                <p className="info__text">Код товара:</p>
                <p className="info__text_code">{{product.id}}</p>
            </div>
        </div>
        <div className="main_container">
            <img :src="`http://localhost:3000/${product.img_link}`" className="main_container__img">
            <div className="main_container__book_info">
                <div className="book_info__up">
                    <ul className="book_info__up_list">
                        <li className="book_info__up_list_el">
                            <p className="up_list_el__name">Тип книги:</p>

                            <p className="up_list_el__type">Печатная книга</p>
                        </li>
                        <li className="book_info__up_list_el">
                            <p className="up_list_el__name">Издательство:</p>

                            <p className="up_list_el__type">Да кто бы знал</p>
                        </li>
                        <li className="book_info__up_list_el">
                            <p className="up_list_el__name">ISBN:</p>

                            <p className="up_list_el__type">9785604800904</p>
                        </li>
                        <li className="book_info__up_list_el">
                            <p className="up_list_el__name">Серия:</p>

                            <p className="up_list_el__type">Чему не учат в школе</p>
                        </li>
                        <li className="book_info__up_list_el">
                            <p className="up_list_el__name">Автор:</p>

                            <p className="up_list_el__type">{{product.author}}</p>
                        </li>
                        <li className="book_info__up_list_el">
                            <p className="up_list_el__name">Год издания:</p>

                            <p className="up_list_el__type">2023</p>
                        </li>
                    </ul>
                    <div className="book_info__up_panel">
                        <div className="up_panel__info">
                            <p className="up_panel__info_text">Цена:</p>
                            <p className="up_panel__info_value">1000 руб.</p>
                        </div>
                        <button className="up_panel__btn" type="submit">Купить</button>
                    </div>
                </div>
                <p className="book_info__down">
                    {{product.description}}
                </p>
            </div>
        </div>
    </div>
</template>
<style>
.book_info__main_container {
    padding: 0px 140px;
}

.book_info__head_list {
    display: flex;
    column-gap: 8px;
    margin-bottom: 30px;
}

.book_info__head_list_el {
    display: flex;
    column-gap: 8px;

}

.head_list_el__text {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #121212;
    opacity: 0.4;
    text-decoration: none;
}

.head_list_el__text:hover {
    opacity: 0.8;
}

.colored {
    color: #1400ff;
    font-weight: 600;
    opacity: 1;

}

.head_list_el__dash {
    opacity: 0.4;
}

.last {

    display: none;
}

.main_container {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 150px;
}

.main_container__title {
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 0.02em;
    color: #121212;
    margin-bottom: 15px;
}

.main_container__info {
    display: flex;
    justify-content: space-between;
}

.main_container__author {
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.02em;
    color: #000;
}

.main_container__img {
    width: 250px;
    height: 380px;
    margin-left: 50px;
    display: block;
}

.main_container__book_info {
    display: flex;
    flex-direction: column;
    row-gap: 60px;
}

.info {
    display: flex;
    column-gap: 5px;
    margin-top: 8px;
    margin-bottom: 30px;
}

.info__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #121212;
    opacity: 0.4;
}

.info__code {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #121212;
}

.book_info__up {
    display: flex;
    column-gap: 110px;
}

.book_info__up_list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 470px;
    height: 154px;
}

.book_info__up_list_el {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
    border-bottom-style: dotted;
    color: rgba(0, 0, 0, 0.5);


}

.up_list_el__name {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #121212;
    opacity: 0.4;
}

.up_list_el__type {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #121212;
}

.book_info__up_panel {
    width: 350px;
    height: 176px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
}

.up_panel__info {
    display: flex;
    justify-content: space-between;
}

.up_panel__info_text {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #000;
}

.up_panel__info_value {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #000;
}

.up_panel__btn {
    padding: 5px 65px;
    background: #1400ff;
    border-radius: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #fff;
    width: 200px;
    height: 42px;
    align-self: center;

}

.up_panel__btn:hover {
    opacity: 0.8;
}

.book_info__down {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000;
    width: 920px;
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