<script>
export default {

}
</script>
<template>
    <footer>
        <ul className="footer__list">
            <li className="list__el">
                Авторы
            </li>
            <li className="list__el">
                Оплата
            </li>
            <li className="list__el">
                Доставка
            </li>
            <li className="list__el">
                FAQ
            </li>
            <li className="list__el">
                Оферта
            </li>
            <li className="list__el">
                Контактная информация
            </li>
        </ul>
    </footer>
</template>
<style>
footer {
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    width: 1440px;
    height: 100px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
    margin: 0px 140px;
    padding: 0px 110px;
    display: flex;
    justify-content: center;
}

.footer__list {
    list-style: none;
    display: flex;
    column-gap: 70px;
    margin-top: 34px;
}

.list__el {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    color: #000;
}
</style>