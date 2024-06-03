<script>
import Trash from '@/components/img/Trash.vue';
import Edit from '@/components/img/Edit.vue';
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
    export default {
        components: {Edit, Trash},
        name: 'PopupComponent',
  setup() {
    const isVisible = ref(false);
    const windowCont = ref(null);

    const centerPopup = () => {
      const leftPosition = document.body.offsetWidth / 2 - windowCont.value.offsetWidth / 2;
      const topPosition = document.body.offsetHeight / 2 - windowCont.value.offsetHeight / 2;
      windowCont.value.style.left = `${leftPosition}px`;
      windowCont.value.style.top = `${topPosition}px`;
    };

    const PopUpShow = () => {
      isVisible.value = true;
      nextTick(() => {
        centerPopup();
      });
    };

    const PopUpHide = () => {
      isVisible.value = false;
    };

    onMounted(() => {
      window.addEventListener('resize', centerPopup);
    });

    return {
      isVisible,
      windowCont,
      PopUpShow,
      PopUpHide,
    };
  },
};
</script>
<template>
    <div v-if="isVisible" className="overlay" @click="PopUpHide">
      <div class="popup" @click.stop ref="windowCont">
        <form className="popup__form">
          <h2 className="popup__title">Редактирование записи</h2>
          <label className="popup__label">Название</label>
          <input className="popup__input_name">
          <div className="popup__middle">
            <div className="popup__middle_author">
              <label className="popup__label">Автор</label>
              <input className="popup__input_author">
            </div>
            <div className="popup__middle_rows">
              <div className="popup__middle_up_row">
                <div className="popup__category">
                  <label className="popup__label">Категория</label>
                  <input className="popup__category_input">
                </div>
                <div className="popup__cost">
                  <label className="popup__label">Цена, руб.</label>
                  <input className="popup__cost_input">
                </div>
              </div>
              <div className="popup__middle_down_row">
                <div className="popup__genre">
                  <label className="popup__label">Жанр</label>
                  <input className="popup__genre_input">
                </div>
                <div className="popup__quanity"> 
                  <label className="popup__label">Кол-во, штук</label>
                  <input className="popup__quanity_input">
                </div>
              </div>
            </div>
          </div>
          <div className="popup__down">
            <div className="popup__description">
              <label className="popup__label">Описание</label>
              <textarea className="popup__description_textarea"></textarea>
            </div>
            <div className="popup__image">
              <label className="popup__label">Изображение</label>
              <input type="image" className="popup__image_input">
            </div>
          </div>
          <button @click="PopUpHide" className="popup__save_btn">Сохранить</button>
        </form>
      </div>
    </div>
    <ul className="edit_container__product_list_edit">
        <li className="edit_container__product_list_el_edit">
        Книга про Васю Пупкина
        </li>
        <li className="edit_container__product_list_el_edit">
        Олег Викторович Салтыков
        </li>
        <li className="edit_container__product_list_el_edit">
        Ужасы
        </li>
        <li className="edit_container__product_list_el_edit">
        Новинки
        </li>
        <li className="edit_container__product_list_el_edit">
        5000
        </li>
        <li className="edit_container__product_list_el_edit">
        4
        </li>
        <button  @click="PopUpShow" className="product_list_el__edit_btn">
            <Edit/>
        </button>
        <button className="product_list_el__trash_btn">
            <Trash/>
        </button>
    </ul>
</template>
<style>

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup {
  position: absolute;
  background: white;
  padding: 60px;
  width: 700px;
  height: 700px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
.popup__form{
  display: flex;
  flex-direction: column;
  
}
.popup__title{
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #000;
  align-self: center;
}
.popup__label{
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000;
  padding-bottom: 10px;
}
.popup__input_name{
  width: 580px;
  height: 60px;
  background: #fff;
  padding-left: 10px;
  margin-bottom: 30px;
}
.popup__middle{
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
}
.popup__middle_author{
  display: flex;
  flex-direction: column;
}
.popup__input_author{
  width: 200px;
  height: 134px;
  background: #fff;
  padding-left: 10px;
}
.popup__middle_rows{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  
}
.popup__middle_up_row{
  display: flex;
  column-gap: 30px;

}
.popup__middle_down_row{
  display: flex;
  column-gap: 30px;
}
.popup__category{
  display: flex;
  flex-direction: column;
  column-gap: 10px;
}
.popup__category_input{
  width: 200px;
  height: 40px;
  background: #fff;
  padding-left: 10px;
}
.popup__cost{
  display: flex;
  flex-direction: column;
  column-gap: 10px;
}
.popup__cost_input{
  width: 120px;
  height: 40px;
  background: #fff;
  padding-left: 10px;
}
.popup__genre{
  display: flex;
  flex-direction: column;
  
}
.popup__genre_input{
  width: 200px;
  height: 40px;
  background: #fff;
  padding-left: 10px;
}
.popup__quanity{
  display: flex;
  flex-direction: column;
  
}
.popup__quanity_input{
  background: #fff;
  width: 60px;
  height: 40px;
  align-self: center;
  padding-left: 10px;
}
.popup__down{
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
}
.popup__description{
  display: flex;
  flex-direction: column;
}
.popup__description_textarea{
  resize: none;
  width: 430px;
  height: 122px;
  background: #fff;
  padding: 10px;
}
.popup__image{
  display: flex;
  flex-direction: column;
}
.popup__image_input{
  margin-top: 50px;
}
.popup__save_btn{
  width: 205px;
  height: 47px;
  background: #1400ff;
  border-radius: 20px;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #fff;
  align-self: center;
  margin-top: 30px;
  cursor: pointer;
}
.popup__save_btn:hover{
  opacity: 0.8;
}

.edit_container__product_list_edit{
  display: flex;
  width: 1070px;
  height: 65px;
  background: #fff;
  align-items: center;
  padding-left: 10px;
  column-gap: 80px;
}
.edit_container__product_list_el_edit{
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  width: 100px;
  color: #000;
  text-align: left;
}
.edit_container__product_list_el_edit:nth-child(3){
padding-left: 16px;
}
.product_list_el__edit_btn{
  border: none;
  background: none;
  position: absolute;
  margin-left: 980px;
  cursor: pointer;
}
.product_list_el__edit_btn:hover{
  opacity: 0.6;
}
.product_list_el__trash_btn{
  border: none;
  background: none;
  position: absolute;
  margin-left: 1020px;
  cursor: pointer;
  
}
.product_list_el__trash_btn:hover{
  opacity: 0.6;
}
</style>