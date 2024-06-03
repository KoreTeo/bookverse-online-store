<script>
import BurgerBtn2 from '@/components/img/BurgerBtn2.vue';
import EditContainer from '@/components/EditContainer.vue'
import Arrow from '@/components/img/Arrow.vue';
import OrderContainer from '@/components/OrderContainer.vue';

  export default{
    components: { BurgerBtn2,EditContainer, OrderContainer, Arrow},
    data() {
		return {
      activeTab: 1
    }
	}
}
</script>
<template>
  <div className="admin_panel__main">
    <nav className="admin_panel__navigation">
      <button class="navigation-title"  @click="activeTab = 1" :class="{ active: activeTab === 1 }">Редактирование</button>
      <button class="navigation-title"  @click="activeTab = 2" :class="{ active: activeTab === 2 }">Просмотр заказов</button>
    </nav>
    <div v-show= "activeTab === 1" className="admin_panel__edit">
        <div className="admin_panel__left_container">
          <div className="admin_panel__edit_container">
            <ul className="edit_container__title_list">
              <li className="edit_container__title_list_el">
                Название
              </li>
              <li className="edit_container__title_list_el">
                Автор
              </li>
              <li className="edit_container__title_list_el">
                Жанр
              </li>
              <li className="edit_container__title_list_el">
                Категория
              </li>
              <li className="edit_container__title_list_el">
                Цена, руб.
              </li>
              <li className="edit_container__title_list_el">
                Кол-во, штук
              </li>
            </ul>
            <div className="edit_containers__components">
              <EditContainer/>
              <EditContainer/>
              <EditContainer/>
              <EditContainer/>
              <EditContainer/>
              <EditContainer/>
              <EditContainer/>
            </div>
          </div>
        </div>
        <form className="admin_panel__right_container" method="post">
          <h3 className="right_container__title">Поиск товара(-ов)</h3>
          <label className="right_container__label">Поиск</label>
          <input className="right_container__search_input">
          <label className="right_container__label">Цена</label>
          <div className="right_container__cost_inputs">
            <input className="right_container__min_cost_input">
            <input className="right_container__max_cost_input">
          </div>
          <label className="right_container__label">Поиск в категории</label>
          <input className="right_container__category_input" placeholder="Все категории">
          <div className="category_input__btn">
            <BurgerBtn2/>
          </div>
          <button className="right_container__btn">Найти</button>
        </form>
    </div>
    <div v-show= "activeTab === 2" className="admin_panel__order">
      <div className="admin_panel__left_container">
          <div className="admin_panel__edit_container">
            <ul className="edit_container__title_list_order">
              <li className="edit_container__title_list_el">
                Номер заказа
              </li>
              <li className="edit_container__title_list_el">
                Дата заказа
              </li>
              <li className="edit_container__title_list_el">
                Место доставки
              </li>
              <li className="edit_container__title_list_el">
                Статус
              </li>
              <li className="edit_container__title_list_el">
                Стоимость
              </li>
            </ul>
            <div className="edit_containers__components">
              <OrderContainer/>
              <OrderContainer/>
              <OrderContainer/>
              <OrderContainer/>
              <OrderContainer/>
              <OrderContainer/>
              <OrderContainer/>
            </div>
          </div>
        </div>
      <form className="admin_panel__right_container_order" method="post">
          <h3 className="right_container__title">Поиск заказа(-ов)</h3>
          <label className="right_container__label">Поиск</label>
          <input className="right_container__search_input">
          <label className="right_container__label">Стоимость</label>
          <div className="right_container__cost_inputs">
            <input className="right_container__min_cost_input">
            <input className="right_container__max_cost_input">
          </div>
          <label className="right_container__label">Статус</label>
          <input className="right_container__search_input">
          <button className="right_container__arrow">
            <Arrow/>
          </button>
          <label className="right_container__label">Дата заказа</label>
          <input className="right_container__search_input">
          <button className="right_container__btn">Найти</button>
      </form>
    </div>
  </div>
</template>

<style>
.admin_panel__main{
  display: flex;
  flex-direction: column;
}
.admin_panel__edit{
  display: flex;
  column-gap: 30px;
}
.admin_panel__left_container{
  display: flex;
  flex-direction: column;
}
.admin_panel__navigation{
  display: flex;
  column-gap: 5px;
}
.navigation-title{
    border-radius: 20px 20px 0 0;
    border: none;
    width: 200px;
    height: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    cursor: pointer;
    
}
.navigation-title:hover{
  opacity: 0.8;
  color: #1400ff;
}
.active{
  color: #1400ff;
  background: #d9d9d9;
}


.edit_containers__components{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}



.admin_panel__edit_container{
  width: 1150px;
  height: 600px;
  background: #d9d9d9;
  padding: 20px 40px;
}
.edit_container__title_list{
  display: flex;
  column-gap: 37px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.edit_container__title_list_el{
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000;
  width: 130px;
  text-align: center;
  
}

.admin_panel__right_container{
  margin-top: 122px;
  border-radius: 40px;
  width: 250px;
  height: 420px;
  background: #d9d9d9;
  border-radius: 40px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
}
.right_container__title{
  font-weight: 400;
  font-size: 20px;
  color: #000;
  align-self: center;;
}
.right_container__label{
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  
}
.right_container__search_input{
  border-radius: 20px;
  width: 200px;
  height: 30px;
  background: #fff;
  margin-left: 5px;
  padding-left: 10px;
}
.right_container__cost_inputs{
  display: flex;
  column-gap: 20px;
}
.right_container__min_cost_input{
  border-radius: 20px;
  width: 90px;
  height: 30px;
  background: #fff;
  margin-left: 5px;
  padding-left: 10px;
}
.right_container__max_cost_input{
  border-radius: 20px;
  width: 90px;
  height: 30px;
  background: #fff;
  margin-left: 5px;
  padding-left: 10px;
}
.right_container__category_input{
  font-weight: 400;
  font-size: 16px;
  color: #000;
  margin-left: 5px;
  padding-left: 10px;
}
.category_input__btn{
  position: absolute;
  margin-top: 261px;
  margin-left: 170px;
  border: 0.50px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin-top: 258px;
  width: 35px;
  height: 23px;
  padding-top: 2px;
  padding-left: 9px;
  cursor: pointer;
}
.category_input__btn:hover{
  opacity: 0.6;
}
.right_container__btn{
  margin-top: 30px;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  border-radius: 20px;
  width: 75px;
  height: 25px;
  background: #fff;
  border: none;
  cursor: pointer;
  }
.right_container__btn:hover{
  opacity: 0.8;
}

.admin_panel__order{
  display: flex;
  column-gap: 30px;
}
.admin_panel__right_container_order{
  margin-top: 40px;
  border-radius: 40px;
  width: 250px;
  height: 523px;
  background: #d9d9d9;
  border-radius: 40px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
}
.right_container__arrow{
  border: none;
  position: absolute;
  margin-left: 170px;
  margin-top: 264px;
  background: #FFF;
  cursor: pointer;
}
.right_container__arrow:hover{
  opacity: 0.6;
}

.edit_container__title_list_order{
  display: flex;
  column-gap: 50px;
  margin-left: 10px;
  margin-bottom: 10px;
}










</style>