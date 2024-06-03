<script>
import Trash from '@/components/img/Trash.vue';
import Edit from '@/components/img/Edit.vue';
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import axios from 'axios';
export default {
  components: { Edit, Trash },
  name: 'PopupComponent',
  props: {
    product: {}
  },
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
  data(){
    return{
        editName: this.product.name,
        editAuthor: this.product.author,
        editCategory: this.product.category,
        editPrice: this.product.price,
        editGenre: this.product.genre,
        editQuantity: this.product.quantity_in_stock,
        editDescription: this.product.description,
    }
  },
  methods: {
    async editProduct() {
      this.PopUpHide()
      let formData = new FormData();
      formData.append('id', this.product.id);
      this.product.name = this.editName;
      formData.append('name', this.editName);
      this.product.description = this.editDescription;
      formData.append('description', this.editDescription);
      this.product.category = this.editCategory;
      formData.append('category', this.editCategory);
      this.product.price = this.editPrice;
      formData.append('price', this.editPrice);
      this.product.quantity_in_stock = this.editQuantity;
      formData.append('quantity_in_stock', this.editQuantity);
      this.product.genre = this.editGenre;
      formData.append('genre', this.editGenre);
      this.product.author = this.editAuthor;
      formData.append('author', this.editAuthor);
      formData.append('discontinued', 'false');
      try {
        const response = await axios.post(`http://localhost:3000/api/product/update/${this.product.id}`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  }
};
</script>
<template>
  <div v-if="isVisible" className="overlay" @click="PopUpHide">
    <div class="popup" @click.stop ref="windowCont">
      <form className="popup__form">
        <h2 className="popup__title">Редактирование записи</h2>
        <label className="popup__label">Название</label>
        <input v-model="editName" className="popup__input_name">
        <div className="popup__middle">
          <div className="popup__middle_author">
            <label className="popup__label">Автор</label>
            <input v-model="editAuthor" className="popup__input_author">
          </div>
          <div className="popup__middle_rows">
            <div className="popup__middle_up_row">
              <div className="popup__category">
                <label className="popup__label">Категория</label>
                <input v-model="editCategory" className="popup__category_input">
              </div>
              <div className="popup__cost">
                <label className="popup__label">Цена, руб.</label>
                <input v-model="editPrice" className="popup__cost_input">
              </div>
            </div>
            <div className="popup__middle_down_row">
              <div className="popup__genre">
                <label className="popup__label">Жанр</label>
                <input v-model="editGenre" className="popup__genre_input">
              </div>
              <div className="popup__quanity">
                <label className="popup__label">Кол-во, штук</label>
                <input v-model="editQuantity" className="popup__quanity_input">
              </div>
            </div>
          </div>
        </div>
        <div className="popup__down">
          <div className="popup__description">
            <label className="popup__label">Описание</label>
            <textarea v-model="editDescription" className="popup__description_textarea"></textarea>
          </div>
        </div>
        <button @click.prevent="editProduct" className="popup__save_btn">Сохранить</button>
      </form>
    </div>
  </div>
  <ul className="edit_container__product_list_edit">
    <li className="edit_container__product_list_el_edit">
      {{product.name}}
    </li>
    <li className="edit_container__product_list_el_edit">
      {{product.author}}
    </li>
    <li className="edit_container__product_list_el_edit">
      {{product.genre}}
    </li>
    <li className="edit_container__product_list_el_edit">
      {{product.category}}
    </li>
    <li className="edit_container__product_list_el_edit">
      {{product.price}}
    </li>
    <li className="edit_container__product_list_el_edit">
      {{product.quantity_in_stock}}
    </li>
    <button @click="PopUpShow" className="product_list_el__edit_btn">
      <Edit />
    </button>
    <button className="product_list_el__trash_btn">
      <Trash />
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

.popup__form {
  display: flex;
  flex-direction: column;

}

.popup__title {
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #000;
  align-self: center;
}

.popup__label {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000;
  padding-bottom: 10px;
}

.popup__input_name {
  width: 580px;
  height: 60px;
  background: #fff;
  padding-left: 10px;
  margin-bottom: 30px;
}

.popup__middle {
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
}

.popup__middle_author {
  display: flex;
  flex-direction: column;
}

.popup__input_author {
  width: 200px;
  height: 134px;
  background: #fff;
  padding-left: 10px;
}

.popup__middle_rows {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

}

.popup__middle_up_row {
  display: flex;
  column-gap: 30px;

}

.popup__middle_down_row {
  display: flex;
  column-gap: 30px;
}

.popup__category {
  display: flex;
  flex-direction: column;
  column-gap: 10px;
}

.popup__category_input {
  width: 200px;
  height: 40px;
  background: #fff;
  padding-left: 10px;
}

.popup__cost {
  display: flex;
  flex-direction: column;
  column-gap: 10px;
}

.popup__cost_input {
  width: 120px;
  height: 40px;
  background: #fff;
  padding-left: 10px;
}

.popup__genre {
  display: flex;
  flex-direction: column;

}

.popup__genre_input {
  width: 200px;
  height: 40px;
  background: #fff;
  padding-left: 10px;
}

.popup__quanity {
  display: flex;
  flex-direction: column;

}

.popup__quanity_input {
  background: #fff;
  width: 60px;
  height: 40px;
  align-self: center;
  padding-left: 10px;
}

.popup__down {
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
}

.popup__description {
  display: flex;
  flex-direction: column;
}

.popup__description_textarea {
  resize: none;
  width: 580px;
  height: 122px;
  background: #fff;
  padding: 10px;
}

.popup__image {
  display: flex;
  flex-direction: column;
}

.popup__image_input {
  margin-top: 50px;
  margin-left: 30px;
}

.popup__save_btn {
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

.popup__save_btn:hover {
  opacity: 0.8;
}

.edit_container__product_list_edit {
  display: flex;
  width: 1070px;
  height: 65px;
  background: #fff;
  align-items: center;
  padding-left: 10px;
  column-gap: 80px;
}

.edit_container__product_list_el_edit {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  width: 100px;
  color: #000;
  text-align: left;
}

.edit_container__product_list_el_edit:nth-child(3) {
  padding-left: 16px;
}

.product_list_el__edit_btn {
  border: none;
  background: none;
  position: absolute;
  margin-left: 980px;
  cursor: pointer;
}

.product_list_el__edit_btn:hover {
  opacity: 0.6;
}

.product_list_el__trash_btn {
  border: none;
  background: none;
  position: absolute;
  margin-left: 1020px;
  cursor: pointer;

}

.product_list_el__trash_btn:hover {
  opacity: 0.6;
}
</style>