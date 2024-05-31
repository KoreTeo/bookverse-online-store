<script>
export default{

}
</script>
<template>
    <li className="catalog__list_el">
        <div>
            <img src="./img/Book1.jpg" className="list_el__img">
        </div>  
        <div className="list_el_info">
            <h2 className="list_el__info_title">Самое полное название данной в каталоге книги</h2>
            <div className="list_el__info_about">
                <p className="info_about__description">Описание книги мелким шрифтом, какое-то предисловие к прочтению и так далее и тому подобное да, немного информации от автора, какие нибудь цитаты.</p>
                <ul className="info_about__list">
                    <li className="info_about__list_el">
                        <p className="info_about__list_el_name">Издательство:</p>
                        <p className="info_about__list_el_value">Какое</p>
                    </li>
                    <li className="info_about__list_el">
                        <p className="info_about__list_el_name">Жанр:</p>
                        <p className="info_about__list_el_value">Какой-нибудь</p>
                    </li>
                    <li className="info_about__list_el">
                        <p className="info_about__list_el_name">Автор:</p>
                        <p className="info_about__list_el_value">Кто-то</p>
                    </li>
                    <li className="info_about__list_el">
                        <p className="info_about__list_el_name">Год издания:</p>
                        <p className="info_about__list_el_value">2023</p>
                    </li>
                </ul>
                <div className="info_about__extras">
                    <p className="info_about__cost">1000 ₽</p>
                    <button className="info_about__btn" type="submit">В корзину</button>
                </div>
            </div>
        </div>
    </li>
</template>
<style>
.catalog__list_el{
    display: flex;
    background: #d9d9d9;
    width: 900px;
    height: 250px;
    padding: 15px 28px;
    column-gap: 40px;
}
.list_el__img{
    width: 150px;
    height: 220px; 
}
.list_el_info{
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}
.list_el__info_title{
    font-weight: 500;
    font-size: 22px;
    line-height: 120%;
    color: #000;
    margin-top: 10px;
    
}
.list_el__info_about{
    display: flex;
    column-gap: 40px;
}
.info_about__description{
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    text-align: justify;
    color: rgba(0, 0, 0, 0.59);
}
.info_about__list{
    display: flex;
    flex-direction: column;
    row-gap: 12px;
}
.info_about__list_el{
    display: flex;
    column-gap: 4px;
}
.info_about__list_el_name{
    font-weight: 400;
    font-size: 16px;
    line-height: 88%;
    color: #121212;
    opacity: 0.4;
}
.info_about__list_el_value{
    font-weight: 400;
    font-size: 16px;
    line-height: 88%;
    color: #121212;
}
.info_about__extras{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
}
.info_about__cost{
    margin-top: 10px;
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    color: #000;
}
.info_about__btn{
    width: 115px;
    height: 32px;
    background: #000aff;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #fff;
}
.info_about__btn:hover{
    opacity: 0.8;
    cursor: pointer;
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