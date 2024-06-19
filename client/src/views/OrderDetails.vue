<script>
import DetOrderComp from '../components/DetOrderComp.vue';
    export default {
        components: {DetOrderComp}

}
</script>

<template>
    <div className="det__main">
        <div className="det__info">
            <div className="det__title">
                <h2 className="det__title_name">Детали заказа</h2>
                <a className="det__title_orders" href="#">Заказы</a>
            </div>
            <div className="det__main_info">
                <h3 className="det__main_info_head">Заказ №5433434 от 21.04.2024</h3>
                <ul className="det__info_place_list">
                    <li className="det__info_place">
                        <p className="det__info_description">Статус заказа:</p>
                        <p className="det__info_description">Оплачен</p>
                    </li>
                    <li className="det__info_place">
                        <p className="det__info_description">Способ доставки:</p>
                        <p className="det__info_description">Самовывоз</p>
                    </li>
                </ul>
                <div className="det__info_place">
                    <p className="det__info_description"> Адресс доставки:</p>
                    <p className="det__info_description">г. Красноярск, Красноярский край, Россия</p>
                </div>
                <div className="det__info_extras">
                    <button type="button" className="info_extras__btn">Собрать заказ</button>
                    <div className="info_extras">
                        <h3 className="info_extras__name">Итог:</h3>
                        <h3 className="info_extras__name">5000 руб.</h3>
                    </div>
                </div>
            </div>
        </div>
        <ul className="det__orders_el_list">
            <DetOrderComp/>
            <DetOrderComp/>
            <DetOrderComp/>
            <DetOrderComp/>
            <DetOrderComp/>
        </ul>
    </div>
</template>
<style>
.det__orders_el_list{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 50px;
}

.det__main{
    display: flex;
    column-gap: 64px;
}
.det__info{
    display: flex;
    flex-direction: column;
    row-gap: 22px;
}
.det__title{
    display: flex;
    justify-content: space-between;
}
.det__title_name{
    font-size: 24px;
}
.det__title_orders{
    font-size: 24px;
    text-decoration: none;
    color: #1400FF;
}
.det__title_orders:hover{
    opacity: 0.7;
}
.det__main_info{
    width: 626px;
    height: 314px;
    background: #D9D9D9;
    padding: 25px;
}
.det__info_description{
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #000;
}
.det__info_place{
    display: flex;
    column-gap: 30px;
    padding-top: 40px;
}
.det__info_place_list{
    display: flex;
    column-gap: 40px;
}
.det__main_info_head{
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    color: #000;
}
.det__info_extras{
    display: flex;
    padding-top: 60px;
    justify-content: space-between;
}
.info_extras{
    display: flex;
    column-gap: 10px;
}
.info_extras__name{
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    color: #000;
}
.info_extras__btn{
    width: 240px;
    height: 52px;   
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #fff;
    background: #1400ff;
    border-radius: 20px;
    margin-top: -10px;
}
.info_extras__btn:hover{
    opacity: 0.7;
}
.info_extras__btn:active{
    background:#fff;
    color: #000;
    border: none;
}
</style>