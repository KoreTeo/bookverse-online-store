<script setup>
import { useAuthorizedStore } from '../stores/isAuthorised';
import { useCartStore } from '@/stores/cartStore';
</script>

<script>
import axios from 'axios';

export default {
  name: 'Authorization',
  data() {
    return {
      phone: '',
      password: ''
    };
  },
  computed: {
    store: () => useAuthorizedStore(),
    cartStore: () => useCartStore()
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/user/login', {
          phone: this.phone,
          password: this.password
        });
        localStorage.setItem('authToken', response.data.token);
        this.store.authorize();
        this.cartStore.fetchCartDetailsFromDB();
        this.$router.push('/profile/edit')
      }
      catch (error) {
        console.error('There was an error!', error);
        alert('Failed to login. Please try again later.');
      }
    }
  }
}
</script>

<template>
  <div class="auth__main-container">
    <div class="auth__main-title">Авторизация</div>
    <form class="auth__form" @submit.prevent="loginUser">
      <label class="form__label" for="Phone">Введите ваш номер телефона</label>
      <input class="form__input" v-model="phone" type="tel" id="Phone" placeholder="+79000000000">
      <label class="form__label" for="Password">Введите ваш пароль</label>
      <input class="form__input" v-model="password" type="password" id="Password" placeholder="••••••">
      <div class="form__checkbox_div">
        <input class="form__checkbox" type="checkbox" id="Checkbox">
        <label class="form__checkbox_label" for="Checkbox">Запомни меня</label>
      </div>
      <button class="auth__form__button" type="submit">Войти</button>
      <RouterLink class="form__ref" to="/registration">Регистрация</RouterLink>
      <a class="form__ref" href="#">Забыли пароль?</a>
    </form>
  </div>
</template>

<style>
.auth__main-container {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
}

.auth__main-title {
  font-weight: 300;
  font-size: 46px;
  line-height: 120%;
  color: #000;
  align-self: center;
  margin-bottom: 15px;
}

.auth__form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
}

.form__label {
  font-weight: 300;
  font-size: 24px;
  line-height: 120%;
  color: #000;
  margin-bottom: 5px;
  margin-top: 10px;
}

.form__input {
  padding: 26px 0px;
  padding-left: 31px;
  border: none;
  background: #d9d9d9;
  border-radius: 20px;
  width: 500px;
  height: 80px;
  align-self: center;
  margin-bottom: 25px;
  font-weight: 300;
  font-size: 24px;
  line-height: 120%;
  color: #000;
}

.form__input::placeholder {
  font-weight: 300;
  font-size: 24px;
  line-height: 120%;
  color: #000;
}

.form__checkbox_div {
  display: flex;
  justify-content: center;
}

.form__checkbox_label {
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #000;
  margin-left: 5px;
  cursor: pointer;
}

.auth__form__button {
  border-radius: 20px;
  border: none;
  width: 156px;
  height: 56px;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #FFF;
  background: #000aff;
  margin-top: 15px;
  cursor: pointer;
  align-self: center;
}

.form__button:hover {
  opacity: 0.7;
}

.form__button:active {
  opacity: 0.5;
}


.form__ref {
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #1400ff;
  align-self: center;
  margin-top: 15px;
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
