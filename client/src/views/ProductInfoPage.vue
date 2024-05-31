<script>
import MainComp from '../components/MainComp.vue';
export default{
    components: {MainComp}
}
</script>
<template>
    <div className="book_info__main_container">
        <ul className="book_info__head_list">
            <li className="book_info__head_list_el">
                <a href="#" className="head_list_el__text">Главная</a>
                <div className="head_list_el__dash">—</div>
            </li>
            <li className="book_info__head_list_el">
                <a href="#"  className="head_list_el__text">Каталог</a>
                <div className="head_list_el__dash">—</div>
            </li>
            <li className="book_info__head_list_el">
                <a href="#" className="head_list_el__text">Новинки</a>
                <div className="head_list_el__dash">—</div>
            </li>
            <li className="book_info__head_list_el">
                <a href="#" className="head_list_el__text colored">Название книги</a>
                <div className="head_list_el__dash last">—</div>
            </li>
        </ul>
        <h1 className="main_container__title">Отношения. Визуальный гид по любви и дружбе из серии Чему не учат в школе для подростков</h1>
        <div className="main_container__info">
            <h3 className="main_container__author">Автор книги</h3>
            <div className="info">
                <p className="info__text">Код товара:</p>
                <p className="info__text_code">30040300R0</p>
            </div>
        </div>
        <div className="main_container">
            <div className="main_container__img">
                <img src="./img/Book1.jpg" className="main_container__img">
            </div>
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
                            
                            <p className="up_list_el__type">Я сам её автор</p>
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
                    В современном обществе доминирует идея индивидуализма, но одиночество при этом часто воспринимается как личный провал. Мы обнаруживаем в себе стремление одновременно и к свободе, и к близости, что наглядно показал опыт изоляции во время пандемии. В своих эссе немецкий писатель и журналист Даниэль Шрайбер всматривается в этот кажущийся парадокс, обращаясь к трудам философов (от Аристотеля и Мишеля Фуко до Ханны Арендт и Жиля Делеза), художественной литературе (от Джейн Остин до Анни Эрно), актуальным исследованиям практикующих психотерапевтов и даже к популярным ситкомам. И приходит к дарящей надежду мысли, что выстраивание иерархий из моделей жизни, возможно, — не самая удачная идея и слову «одиночество» соответствуют не только темные тона.
                </p>
            </div>
        </div>
        <MainComp/>
    </div>
</template>
<style>
.book_info__main_container{
    padding: 0px 140px;
    
}
.book_info__head_list {
    display: flex;
    column-gap: 8px ;
    margin-bottom: 30px;
}
.book_info__head_list_el {
    display: flex;
    column-gap: 8px ;
   
}
.head_list_el__text{
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #121212;
    opacity: 0.4;
    text-decoration: none;
}
.head_list_el__text:hover{
    opacity: 0.8;
}
.colored{
    color: #1400ff;
    font-weight: 600;
    opacity: 1;
    
}
.head_list_el__dash{
    opacity: 0.4;
}
.last{
    
    display: none;
}
.main_container{
    display: flex;
    justify-content: space-between;
    margin-bottom: 150px;
}
.main_container__title{
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 0.02em;
    color: #121212;
    margin-bottom: 15px;
}
.main_container__info{
    display: flex;
    justify-content: space-between;
}
.main_container__author{
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.02em;
    color: #000;
}
.main_container__img{
    width: 250px;
    height: 380px;
    margin-left: 50px ;
}.main_container__book_info{
    display: flex;
    flex-direction: column;
    row-gap: 60px;
}
.info{
    display: flex;
    column-gap: 5px;
    margin-top: 8px;
    margin-bottom: 30px;
}
.info__text{
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #121212;
    opacity: 0.4;
}
.info__code{
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #121212;
}

.book_info__up{
    display: flex;
    column-gap: 110px;
}
.book_info__up_list{
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 470px;
    height: 154px;
}
.book_info__up_list_el{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
    border-bottom-style: dotted;
    color: rgba(0, 0, 0, 0.5);
    
    
}
.up_list_el__name{
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #121212;
    opacity: 0.4;
}
.up_list_el__type{
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #121212;
}
.book_info__up_panel{
    width: 350px;
    height: 176px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
}
.up_panel__info{
    display: flex;
    justify-content: space-between;
}
.up_panel__info_text{
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #000;
}
.up_panel__info_value{
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #000;
}
.up_panel__btn{
    padding: 5px 65px;
    background: #1400ff;
    border-radius: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #fff;
    width: 200px;
    height: 42px;
    align-self: center  ;
    
}
.up_panel__btn:hover{
    opacity: 0.8;
}

.book_info__down{
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