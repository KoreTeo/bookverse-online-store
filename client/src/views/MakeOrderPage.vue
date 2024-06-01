<script>
import MapIcon from '../components/img/Map.vue';
import SearchIcon from '../components/img/Search.vue'
import CancelIcon from '../components/img/Cancel.vue';
import DeliveryIcon from '../components/img/Delivery.vue';
import WalletIcon from '../components/img/Wallet.vue';
import ProfileIcon from '../components/img/Profile.vue';
export default {
    components: { SearchIcon, CancelIcon, MapIcon, DeliveryIcon, WalletIcon, ProfileIcon }
}
</script>
<template>
    <div className="main_order">
        <div className="order__take_order">
            <p className="order__main_title">Оформление заказ</p>
            <div className="take_order__adress">
                <div className="take_order__header">
                    <MapIcon />
                    <p className="take_order__title">Населённый пункт (город, село)</p>
                </div>
                <label for="Location" className="take_order__label">Местоположение</label>
                <input className="take_order__input_adress" id="Location"
                    placeholder="г. Красноярск, Красноярский край, Россия">
                <div className="take_order__search_icon">
                    <SearchIcon />
                </div>
                <div className="take_order__cancel_icon">
                    <CancelIcon />
                </div>
            </div>
            <div className="take_order__center">
                <div className="take_order__delivery_type">
                    <div className="take_order__header">
                        <DeliveryIcon />
                        <p className="take_order__title">Способ доставки</p>
                    </div>
                    <ul className="delivery_type__list">
                        <li className="delivery_type__list_el">
                            <div className="delivery_type__list_el_info">
                                <input value="self" name="del_type" type="radio" checked="true"
                                    className="delivery_type__list_radio">
                                <p className="take_order__label">Самовывоз</p>
                            </div>
                            <p className="take_order__label">477 руб.</p>
                        </li>
                        <li className="delivery_type__list_el">
                            <div className="delivery_type__list_el_info">
                                <input value="courier" name="del_type" type="radio"
                                    className="delivery_type__list_radio">
                                <p className="take_order__label">Курьер</p>
                            </div>
                            <p className="take_order__label">677 руб.</p>
                        </li>
                        <li className="delivery_type__list_el">
                            <div className="delivery_type__list_el_info">
                                <input value="rusmail" name="del_type" type="radio"
                                    className="delivery_type__list_radio">
                                <p className="take_order__label">Доставка в отделение “Почты России”</p>
                            </div>
                            <p className="take_order__label">100 руб.</p>
                        </li>
                    </ul>
                </div>
                <div className="take_order__pay_type">
                    <div className="take_order__header">
                        <WalletIcon />
                        <p className="take_order__title">Способ оплаты</p>
                    </div>
                    <ul className="delivery_type__list">
                        <li className="pay_type__list_el">
                            <input value="card" name="pay_type" type="radio" checked="true"
                                className="delivery_type__list_radio">
                            <p className="take_order__label">Оплата банковской картой</p>
                        </li>
                        <li className="pay_type__list_el">
                            <input value="sbp" name="pay_type" type="radio" className="delivery_type__list_radio">
                            <p className="take_order__label">Оплата по СБП</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="take_order__receiver">
                <div className="take_order__header">
                    <div className="take_order__profile_icon">
                        <ProfileIcon />
                    </div>
                    <p className="take_order__title">Получатель</p>
                </div>
                <div className="reciver__parts">
                    <ul className="reciver__list">
                        <li className="reciver__list_el">
                            <label className="take_order__label" for="FIO">ФИ</label>
                            <input className="reciver__list_el_input" id="FIO" type="text" placeholder="Роман Рубцов">
                        </li>
                        <li className="reciver__list_el">
                            <label className="take_order__label" for="Email">E-mail</label>
                            <input className="reciver__list_el_input" id="Email" type="email"
                                placeholder="ro.rub@mail.ru">
                        </li>
                        <li className="reciver__list_el">
                            <label className="take_order__label" for="Phone">Телефон</label>
                            <input className="reciver__list_el_input" id="Phone" type="tel" placeholder="89130384577">
                        </li>
                    </ul>
                    <div className="reciver__comments">
                        <label className="take_order__label" for="Comments">Комментарий к заказу</label>
                        <textarea className="reciver__textarea" id="Comments"
                            placeholder="Калитка открывается с кодом 88005553535."></textarea>
                    </div>
                </div>
            </div>
        </div>
        <ul className="order__info_panel">
            <li className="order__info_panel_el">
                <p className="order__info_panel_el_text">Кол-во товаров:</p>
                <p className="order__info_panel_el_text">2 штуки</p>
            </li>
            <li className="order__info_panel_el">
                <p className="order__info_panel_el_text">Общий вес:</p>
                <p className="order__info_panel_el_text">1000 г</p>
            </li>
            <li className="order__info_panel_el">
                <p className="order__info_panel_el_text">Сумма НДС(20%):</p>
                <p className="order__info_panel_el_text">243 руб.</p>
            </li>
            <li className="order__info_panel_el">
                <p className="order__info_panel_el_text">Доставка:</p>
                <p className="order__info_panel_el_text">477 руб.</p>
            </li>
            <li className="order__info_panel_el">
                <p className="order__info_panel_el_text">Итог:</p>
                <p className="order__info_panel_el_text">3243 руб.</p>
            </li>
            <button className="order__info_panel_btn">Оформить заказ</button>
        </ul>
    </div>
</template>
<style>
.main_order {
    display: flex;
    column-gap: 67px;
    margin-top: 80px;
}

.order__main_title {
    font-weight: 400;
    font-size: 44px;
    line-height: 120%;
}

.order__take_order {
    display: flex;
    flex-direction: column;
}

.take_order__title {
    font-weight: 400;
    font-size: 30px;
    line-height: 150%;
    margin-bottom: 15px;
    margin-top: -4px;
}

.take_order__adress {
    width: 1177px;
    height: 175px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 25px 30px;
    margin-bottom: 50px;
}

.take_order__header {
    display: flex;
    column-gap: 12px;
}

.take_order__label {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.5);
}

.take_order__input_adress {
    border: 1px solid #000;
    width: 1105px;
    height: 46px;
    margin-top: 10px;
    padding-left: 50px;
}

.take_order__input_adress::placeholder {
    color: #000;

}

.take_order__search_icon {
    position: absolute;
    margin-top: -35px;
    margin-left: 10px
}

.take_order__cancel_icon {
    position: absolute;
    margin-top: -35px;
    margin-left: 1070px;
}

.take_order__center {
    display: flex;
    column-gap: 73px;
}

.take_order__delivery_type {
    width: 552px;
    height: 279px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 20px 30px;
}

.delivery_type__list {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}

.delivery_type__list_el {
    display: flex;
    justify-content: space-between;
}

.delivery_type__list_el_info {
    display: flex;
    column-gap: 20px;
}

.delivery_type__list_radio {
    accent-color: #1400ff;
}

.pay_type__list_el {
    display: flex;
    column-gap: 20px;
}

.take_order__pay_type {
    width: 552px;
    height: 279px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 20px 30px;
}

.take_order__receiver {
    width: 1178px;
    height: 383px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 30px;
}

.receiver__header {
    display: flex;
}

.reciver__parts {
    display: flex;
    justify-content: space-between;
}

.reciver__comments {
    display: flex;
    flex-direction: column;
}

.take_order__profile_icon {
    margin-top: 4px;
}

.reciver__list {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}

.reciver__list_el {
    display: flex;
    flex-direction: column;
}

.reciver__list_el_input {
    border-radius: 10px;
    width: 523px;
    height: 38px;
    background: #d9d9d9;
    padding-left: 16px;
    border: none;
}

.reciver__list_el_input::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000;
}

.reciver__textarea {
    border-radius: 10px;
    width: 511px;
    height: 222px;
    background: #d9d9d9;
    border: none;
    padding: 10px 30px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    resize: none;
}

.reciver__textarea::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000;
}















.order__info_panel {
    width: 526px;
    height: 496px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 23px 40px;
    display: flex;
    flex-direction: column;
    row-gap: 45px;
}

.order__info_panel_el {
    display: flex;
    justify-content: space-between;

}

.order__info_panel_el_text {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
}

.order__info_panel_btn {
    align-self: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    color: #fff;
    background: #1400ff;
    border-radius: 20px;
    width: 270px;
    height: 54px;
}

.order__info_panel_btn:active {
    opacity: 0.8;
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