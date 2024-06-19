<script>
export default{

}
</script>
<template>
    <li className="order_el_list__el">
        <div>
            <img src="@\components\img\Book3.jpg" className="det__img">
        </div>
        <ul className="det__container_list">
            <li className="det__container_list_el">
                <p className="container_list_el__info">Название:</p>
                <p className="container_list_el__info">Самое полное название данной книги с полным обозначением</p>
            </li>
            <li className="det__container_list_el">
                <p className="container_list_el__info">Автор:</p>
                <p className="container_list_el__info">Полный автор данной книги</p>
            </li>
            <li className="det__container_list_el">
                <div className="container_list_el__part">
                    <p className="container_list_el__info pad">Жанр:</p>
                    <p className="container_list_el__info ">Ужасы</p>
                </div>
                <div className="container_list_el__part">
                    <p className="container_list_el__info">Цена:</p>
                    <p className="container_list_el__info">2000 руб.</p>
                </div>
            </li>
            <li className="det__container_list_el">
                <div className="container_list_el__part">
                    <p className="container_list_el__info">Категория:</p>
                    <p className="container_list_el__info">Новинки</p>
                </div>
                <div className="container_list_el__part">
                    <p className="container_list_el__info mar">Кол-во:</p>
                    <p className="container_list_el__info">2</p>
                </div>
            </li>
        </ul> 
    </li>
</template>
<style>
.order_el_list__el{
    width: 750px;
    height: 150px;
    background: #ececec;
    padding: 20px 25px;
    display: flex;
    column-gap: 24px;
}
.det__img{
    width: 75px;
    height: 110px;
}
.det__container_list{
    display: flex;
    flex-direction: column;
    row-gap: 5px;
   
}
.det__container_list_el{
    display: flex;
    column-gap: 25px;
}
.det__container_list_el:nth-child(2){
    column-gap: 53px;
}
.det__container_list_el:nth-child(3){
    column-gap: 82px;
}
.det__container_list_el:nth-child(4){
    column-gap: 30px;
    
}
.container_list_el__part{
    display: flex;
    column-gap: 20px;
}
.pad{
    margin-right: 36px;
}
.mar{
    margin-left: 36px;
}
.container_list_el__info{
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000;
}

</style>