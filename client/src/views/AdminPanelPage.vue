<script>
import BurgerBtn2 from '@/components/img/BurgerBtn2.vue';
import EditContainer from '@/components/EditContainer.vue'
import Arrow from '@/components/img/Arrow.vue';
import OrderContainer from '@/components/OrderContainer.vue';
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import axios from 'axios';

export default {
  components: { BurgerBtn2, EditContainer, OrderContainer, Arrow },
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
  data() {
    return {
      products: [],
      orders: [],
      activeTab: 1,
      addName: '',
      addAuthor: '',
      addCategory: '',
      addPrice: '',
      addGenre: '',
      addQuantity: '',
      addDescription: '',
      addImageFile: {},
      searchName: '',
      searchMinPrice: 0,
      searchMaxPrice: 100000,
      searchGenre: '',
      searchCategory: '',
      orderNumber: '',
      orderMinCost: 0,
      orderMaxCost: 100000,
      orderStatus: '',
    }
  },
  mounted() {
    this.checkAuthorization()
    this.fetchProducts()
    this.fetchOrders()
  },
  methods: {
    async checkAuthorization() {
      try {
        const response = await axios.get('http://localhost:3000/api/user/checkrole', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`
          }
        },
        );
        if (response.data.role !== 'ADMIN') {
          this.$router.push('/')
        }
      } catch (error) {
        console.log('Нет доступа')
        this.$router.push('/')
      }
    },
    async fetchProducts() {
      try {
        const response = await axios.post('http://localhost:3000/api/product', {
          name: this.searchName,
          page: 1,
          limit: 10000,
          genre: this.searchGenre,
          category: this.searchCategory,
          min_price: this.searchMinPrice,
          max_price: this.searchMaxPrice,
        });
        this.products = response.data.rows;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async addProduct() {
      this.PopUpHide()
      let formData = new FormData();
      formData.append('name', this.addName);
      formData.append('description', this.addDescription);
      formData.append('category', this.addCategory);
      formData.append('price', this.addPrice);
      formData.append('quantity_in_stock', this.addQuantity);
      formData.append('genre', this.addGenre);
      formData.append('author', this.addAuthor);
      formData.append('discontinued', 'false');
      formData.append('img', this.addImageFile);
      try {
        const response = await axios.post('http://localhost:3000/api/product/create', formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            'Content-Type': 'multipart/form-data'
          }
        });
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
    addImage(event) {
      this.addImageFile = event.target.files[0]
    },
     ResetSearch() {
      this.searchName = ''
      this.searchMinPrice = 0
      this.searchMaxPrice = 100000
      this.searchGenre = ''
      this.searchCategory = ''
      this.fetchProducts();
    },
    async fetchOrders() {
      try {
        const response = await axios.post('http://localhost:3000/api/order/getadmin', {
          number: this.orderNumber,
          min_cost: this.orderMinCost,
          max_cost: this.orderMaxCost,
          status: this.orderStatus,
        },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
          });
        this.orders = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    resetOrder() {
      this.orderNumber = ''
      this.orderMinCost = 0
      this.orderMaxCost = 100000
      this.orderStatus = ''
      this.fetchOrders();
    }
  }
};
</script>
<template>
  <div v-if="isVisible" className="overlay" @click="PopUpHide">
    <div class="popup" @click.stop ref="windowCont">
      <form className="popup__form">
        <h2 className="popup__title">Добавление записи</h2>
        <label className="popup__label">Название</label>
        <input v-model="addName" className="popup__input_name">
        <div className="popup__middle">
          <div className="popup__middle_author">
            <label className="popup__label">Автор</label>
            <input required v-model="addAuthor" className="popup__input_author">
          </div>
          <div className="popup__middle_rows">
            <div className="popup__middle_up_row">
              <div className="popup__category">
                <label className="popup__label">Категория</label>
                <input v-model="addCategory" className="popup__category_input">
              </div>
              <div className="popup__cost">
                <label className="popup__label">Цена, руб.</label>
                <input v-model="addPrice" className="popup__cost_input">
              </div>
            </div>
            <div className="popup__middle_down_row">
              <div className="popup__genre">
                <label className="popup__label">Жанр</label>
                <input v-model="addGenre" className="popup__genre_input">
              </div>
              <div className="popup__quanity">
                <label className="popup__label">Кол-во, штук</label>
                <input v-model="addQuantity" className="popup__quanity_input">
              </div>
            </div>
          </div>
        </div>
        <div className="popup__down">
          <div className="popup__description">
            <label className="popup__label">Описание</label>
            <textarea v-model="addDescription" className="popup__description_textarea_add"></textarea>
          </div>
          <div className="popup__image">
            <label className="popup__label">Изображение</label>
            <input @change="addImage" type="file" className="popup__image_input" accept=".jpg, .jpeg, .png">
          </div>
        </div>
        <button @click.prevent="addProduct()" className="popup__save_btn" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
  <div className="admin_panel__main">
    <nav className="admin_panel__navigation">
      <button class="navigation-title" @click="activeTab = 1"
        :class="{ active: activeTab === 1 }">Редактирование</button>
      <button class="navigation-title" @click="activeTab = 2" :class="{ active: activeTab === 2 }">Просмотр
        заказов</button>
    </nav>
    <div v-show="activeTab === 1" className="admin_panel__edit">
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
            <EditContainer v-for="product in products" :product="product" :key="product.id" />
          </div>
        </div>
      </div>
      <div className="for_add_btn">
        <form className="admin_panel__right_container" method="post">
          <h3 className="right_container__title">Поиск товара(-ов)</h3>
          <label className="right_container__label">Поиск</label>
          <input v-model="searchName" className="right_container__search_input">
          <label className="right_container__label">Цена</label>
          <div className="right_container__cost_inputs">
            <input v-model="searchMinPrice" className="right_container__min_cost_input">
            <input v-model="searchMaxPrice" className="right_container__max_cost_input">
          </div>
          <label className="right_container__label">Поиск по жанрам</label>
          <select v-model="searchGenre" className="right_container__search_input">
            <option selected="selected" value="">Все жанры</option>
            <option value="Фэнтези">Фэнтези</option>
            <option value="Детективы">Детективы</option>
            <option value="Фантастика">Фантастика</option>
            <option value="Ужасы">Ужасы</option>
            <option value="Бизнес">Бизнес</option>
            <option value="Романы">Романы</option>
          </select>
          <label className="right_container__label">Поиск по категориям</label>
          <select v-model="searchCategory" className="right_container__search_input">
            <option selected="selected" value="">Все категории</option>
            <option value="Предзаказы">Предзаказы</option>
            <option value="Новинки">Новинки</option>
            <option value="Бестселлеры">Бестселлеры</option>
          </select>
          <div class="button-container">
            <button @click.prevent="fetchProducts" className="right_container__btn">Найти</button>
            <button @click.prevent="ResetSearch" className="right_container__btn">Сброс</button>
          </div>
        </form>
        <button className="add_btn" @click="PopUpShow">Добавить товар</button>
      </div>
    </div>
    <div v-show="activeTab === 2" className="admin_panel__order">
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
            <OrderContainer v-for="order in orders" :order="order" :key="order.id" />
          </div>
        </div>
      </div>
      <form className="admin_panel__right_container_order" method="post">
        <h3 className="right_container__title">Поиск заказа(-ов)</h3>
        <label className="right_container__label">Поиск</label>
        <input v-model="orderNumber" className="right_container__search_input">
        <label className="right_container__label">Стоимость</label>
        <div className="right_container__cost_inputs">
          <input v-model="orderMinCost" className="right_container__min_cost_input">
          <input v-model="orderMaxCost" className="right_container__max_cost_input">
        </div>
        <label className="right_container__label">Статус</label>
        <select v-model="orderStatus" className="right_container__search_input">
          <option selected="selected" value="">Все статусы</option>
          <option value="В обработке">В обработке</option>
          <option value="Оплачен">Оплачен</option>
          <option value="Отправлен">Отправлен</option>
          <option value="Доставлен">Доставлен</option>
          <option value="Получен">Получен</option>
          <option value="Отменен">Отменен</option>
        </select>
        <div class="button-container">
          <button @click.prevent="fetchOrders" className="right_container__btn">Найти</button>
          <button @click.prevent="resetOrder" className="right_container__btn">Сброс</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.button-container {
  display: flex;
  justify-content: space-between;
}

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

.popup__description_textarea_add {
  resize: none;
  width: 430px;
  height: 122px;
  background: #fff;
  padding: 10px;
}

.popup__image {
  display: flex;
  flex-direction: column;
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

.admin_panel__main {
  display: flex;
  flex-direction: column;
}

.admin_panel__edit {
  display: flex;
  column-gap: 30px;
}

.admin_panel__left_container {
  display: flex;
  flex-direction: column;
}

.admin_panel__navigation {
  display: flex;
  column-gap: 5px;
}

.navigation-title {
  border-radius: 20px 20px 0 0;
  border: none;
  width: 200px;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  cursor: pointer;

}

.navigation-title:hover {
  opacity: 0.8;
  color: #1400ff;
}

.active {
  color: #1400ff;
  background: #d9d9d9;
}


.edit_containers__components {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.admin_panel__edit_container {
  width: 1150px;
  min-height: 600px;
  background: #d9d9d9;
  padding: 20px 40px;
}

.edit_container__title_list {
  display: flex;
  column-gap: 37px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.edit_container__title_list_el {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000;
  width: 130px;
  text-align: center;
}

.admin_panel__right_container {
  margin-top: 42px;
  border-radius: 40px;
  width: 250px;
  height: 500px;
  background: #d9d9d9;
  border-radius: 40px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
}

.right_container__title {
  font-weight: 400;
  font-size: 20px;
  color: #000;
  align-self: center;
  ;
}

.right_container__label {
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #000;

}

.right_container__search_input {
  border-radius: 20px;
  width: 200px;
  height: 30px;
  background: #fff;
  margin-left: 5px;
  padding-left: 10px;
}

.right_container__cost_inputs {
  display: flex;
  column-gap: 20px;
}

.right_container__min_cost_input {
  border-radius: 20px;
  width: 90px;
  height: 30px;
  background: #fff;
  margin-left: 5px;
  padding-left: 10px;
}

.right_container__max_cost_input {
  border-radius: 20px;
  width: 90px;
  height: 30px;
  background: #fff;
  margin-left: 5px;
  padding-left: 10px;
}

.right_container__category_input {
  font-weight: 400;
  font-size: 16px;
  color: #000;
  margin-left: 5px;
  padding-left: 10px;
}

.category_input__btn {
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

.category_input__btn:hover {
  opacity: 0.7;
}

.category_input__btn:hover {
  opacity: 0.5;
}

.right_container__btn {
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

.right_container__btn:hover {
  opacity: 0.7;
}

.right_container__btn:active {
  opacity: 0.5;
}

.admin_panel__order {
  display: flex;
  column-gap: 30px;
}

.admin_panel__right_container_order {
  margin-top: 40px;
  border-radius: 40px;
  width: 250px;
  height: 423px;
  background: #d9d9d9;
  border-radius: 40px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
}

.right_container__arrow {
  border: none;
  position: absolute;
  margin-left: 170px;
  margin-top: 264px;
  background: #FFF;
  cursor: pointer;
}

.right_container__arrow:hover {
  opacity: 0.6;
}

.edit_container__title_list_order {
  display: flex;
  column-gap: 50px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.for_add_btn {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.add_btn {
  margin-top: 5px;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  border-radius: 20px;
  width: 175px;
  height: 25px;
  cursor: pointer;
  align-self: center;

}

.add_btn:hover {
  opacity: 0.7;
}

.add_btn:active {
  opacity: 0.5;
}
</style>