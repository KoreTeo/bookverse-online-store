<script>
import CatalogComp from '../components/CatalogComp.vue';
import Arrow from '../components/img/Arrow.vue';
import ArrowLeft from '../components/img/ArrowLeft.vue';
import ArrowRight from '../components/img/ArrowRight.vue';
import ArrowUP from '../components/img/ArrowUP.vue';
import Checkbox from 'primevue/checkbox';


export default {
    components: { CatalogComp, Arrow, ArrowUP, ArrowLeft, ArrowRight, Checkbox },
    data(){
        return{
            genre: null
        };
    }
}
</script>
<template>
    <div className="catalog__container">
        <form method="post" className="catalog__filters">
            <div>
                <h3 className="filters__title">Жанры</h3>
                <ul className="filters__genre_list">
                    <li className="filters__genre_list_el">
                        <Checkbox  v-model="genre" inputId="fantasy" name="genre" value="fantasy"/>
                        <label for="fantasy" className="genre_list_el__label">Фэнтези</label>
                    </li>
                    <li className="filters__genre_list_el">
                        <input v-model="genre" className="genre_list_el__chk" type="checkbox" name="genre" value="Det">
                        <label className="genre_list_el__label">Детективы</label>
                    </li>
                    <li className="filters__genre_list_el">
                        <input className="genre_list_el__chk" type="checkbox" name="genre" value="Fantast">
                        <label className="genre_list_el__label">Фантастика</label>
                    </li>
                    <li className="filters__genre_list_el">
                        <input className="genre_list_el__chk" type="checkbox" name="genre" value="Hor">
                        <label className="genre_list_el__label">Ужасы</label>
                    </li>
                    <li className="filters__genre_list_el">
                        <input className="genre_list_el__chk" type="checkbox" name="genre" checked value="Biz">
                        <label className="genre_list_el__label">Бизнес</label>
                    </li>
                    <li className="filters__genre_list_el">
                        <input className="genre_list_el__chk" type="checkbox" name="genre" value="Rom">
                        <label className="genre_list_el__label">Романы</label>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="filters__title">Цена</h3>
                <div className="filters__cost_range">
                    <input className="filters__min_cost_input" placeholder="1000 ₽">
                    <p className="filters__defis">—</p>
                    <input className="filters__min_cost_input" placeholder="6585 ₽">
                </div>
            </div>
            <div>
                <h3 className="filters__title">Автор</h3>
                <input className="filters__author_search" placeholder="Поиск по имени автора">
            </div>
            <button className="filters__confirm_btn" type="submit">Применить</button>
            <button className="filters__clear_btn" type="reset">Очистить</button>
        </form>
        <div className="catalog__main_container">
            <div className="catalog__header">
                <div className="catalog__header_up">
                    <ul className="catalog__header_list">
                        <li className="catalog__header_list_el">
                            <button className="catalog_header_list_el__text">Предзаказ</button>
                        </li>
                        <li className="catalog__header_list_el">
                            <button className="catalog_header_list_el__text">Новинки</button>
                        </li>
                        <li className="catalog__header_list_el">
                            <button className="catalog_header_list_el__text">Популярные</button>
                        </li>
                        <li className="catalog__header_list_el">
                            <button className="catalog_header_list_el__text">Все товары</button>
                        </li>
                    </ul>
                    <div className="catalog_header__more_info_panel">
                        <p className="catalog_header__more_info">Показать ещё</p>
                        <div className="sort__arrow">
                            <Arrow />
                        </div>
                    </div>
                </div>
                <div className="catalog_header__sort">
                    <p>Сортировать по:</p>
                    <ul className="sort__list">
                        <li className="sort__list_el">
                            <p className="sort__list_el_cost">Цене</p>
                            <div className="sort__arrow">
                                <Arrow />
                            </div>
                        </li>
                        <li className="sort__list_el">
                            <p className="sort__list_el_rate">Рейтингу</p>
                            <div className="sort__arrow">
                                <ArrowUP />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="catalog__list">
                <CatalogComp />
                <CatalogComp />
                <CatalogComp />
                <CatalogComp />
            </ul>
            <button className="catalog__show_more">Показать ещё</button>
            <div className="catalog__paging">
                <a href="#" className="paging__begin">
                    <ArrowLeft />
                    <ArrowLeft />
                </a>
                <a href="#" className="paging__left">
                    <ArrowLeft />
                </a>
                <ul className="paging_list">
                    <li className="paging_list_el selected">
                        <a href="#" className="page_number selected_number">1</a>
                    </li>
                    <li className="paging_list_el">
                        <a href="#" className="page_number">2</a>
                    </li>
                    <li className="paging_list_el">
                        <a href="#" className="page_number">3</a>
                    </li>
                    <li className="paging_list_el">
                        <a href="#" className="page_number">4</a>
                    </li>
                    <li className="paging_list_el">
                        <a href="#" className="page_number">5</a>
                    </li>
                    <li className="paging_list_el">
                        <a href="#" className="page_number">6</a>
                    </li>
                    <li className="paging_list_el">
                        <a href="#" className="page_number">7</a>
                    </li>
                    <li className="paging_list_el">
                        <a href="#" className="page_number">8</a>
                    </li>
                </ul>
                <a href="#" className="paging__right selected_page">
                    <ArrowRight />
                </a>
                <a href="#" className="paging__end selected_pages">
                    <ArrowRight />
                    <ArrowRight />
                </a>
            </div>
        </div>
    </div>
</template>
<style>
.catalog__container {
    display: flex;
    column-gap: 200px;
}

.catalog__filters {
    border-radius: 5px;
    padding: 20px 24px;
    width: 340px;
    height: 549px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    background: #f5f5f7;
}

.filters__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #121212;
    margin-bottom: 16px;
}

.filters__genre_list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-bottom: 20px;
}

.filters__genre_list_el {
    display: flex;
    column-gap: 12px;
}


.genre_list_el__label {
    font-weight: 400;
    font-size: 16px;
    line-height: 88%;
    color: #121212;
}

.filters__defis {
    font-weight: 400;
    font-size: 16px;
    line-height: 88%;
    color: #121212;
    opacity: 0.4;
    display: flex;
    align-self: center;
}

.filters__cost_range {
    display: flex;
    margin-bottom: 20px;
    column-gap: 8px;
}

.filters__min_cost_input {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 8px 12px;
    width: 128px;
    height: 35px;
    background: #d9d9d9;
}

.filters__author_search {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 7px 12px;
    width: 285px;
    height: 33px;
    background: #d9d9d9;
    margin-bottom: 30px;
}

.filters__confirm_btn {
    border-radius: 5px;
    padding: 6px 98px;
    width: 285px;
    height: 35px;
    background: #1400ff;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    color: #fff;
    margin-bottom: 20px;
}

.filters__confirm_btn:hover {
    opacity: 0.8;
    cursor: pointer;
    ;
}

.filters__clear_btn {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 6px 106px;
    width: 285px;
    height: 35px;
    background: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #121212;
}

.filters__clear_btn:hover {
    opacity: 0.6;
    cursor: pointer;
}




.catalog__header {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    background: #f5f5f7;
    border-radius: 5px;
    padding: 20px 16px;
    width: 900px;
    height: 122px;
    margin-bottom: 50px;
}

.catalog__header_up {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 15px;
    margin-bottom: 15px;


}

.catalog__header_list {
    display: flex;
    column-gap: 15px;
}

.catalog__header_list_el {
    padding: 8px;
    background: #d9d9d9;
    border-radius: 20px;

}

.catalog_header_list_el__text {
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
    color: #121212;
    border: none;
    background: #d9d9d9;
}

.catalog_header_list_el__text:hover {
    color: #000aff;
    cursor: pointer;
}

.catalog_header__more_info_panel {
    margin-top: 8px;
    display: flex;
    column-gap: 5px;
}

.catalog_header__more_info {
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
    color: #000aff
}


.catalog_header__sort {
    display: flex;
    column-gap: 30px;
}

.sort__list {
    display: flex;
    column-gap: 25px;
}

.sort__list_el {
    display: flex;
    column-gap: 5px;
}

.sort__arrow {
    margin-top: -1px;
}




.catalog__list {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
}

.catalog__show_more {
    margin-top: 80px;
    margin-bottom: 80px;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #121212;
    opacity: 0.4;
    border-radius: 5px;
    padding: 16px 384px;
    width: 899px;
    height: 69px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    background: #f5f5f7;
}

.catalog__show_more:hover {
    opacity: 0.8;
}


.catalog__paging {
    display: flex;
    column-gap: 30px;
    padding: 0px 25px;
    width: 888px;
    height: 69px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    background: #f5f5f7;
}

.paging_list {
    display: flex;
    column-gap: 30px;
}

.paging_list_el {
    display: flex;
    align-self: center;
    padding: 18px 24px;

}

.page_number {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #121212;
    opacity: 0.4;
    text-decoration: none;
}

.selected {
    border: 3px solid #1400ff;
    border-radius: 5px;
}

.selected_number {
    opacity: 1;
}

.paging__begin {
    display: flex;
    align-self: center;
    opacity: 0.4;
}

.paging__left {
    display: flex;
    align-self: center;
    opacity: 0.4;
}

.paging__right {
    display: flex;
    align-self: center;
    opacity: 0.4;
}

.paging__end {
    display: flex;
    align-self: center;
    opacity: 0.4;
}

.selected_page {
    opacity: 1;
}

.selected_pages {
    opacity: 1;
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