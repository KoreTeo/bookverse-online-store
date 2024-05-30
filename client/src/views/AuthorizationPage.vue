<template>
    <div class="auth__main-container">
      <div class="auth__main-title">Авторизация</div>
      <form class="auth__form" @submit.prevent="loginUser">
        <label class="form__label" for="Phone">Введите ваш номер телефона</label>
        <input class="form__input" v-model="phone" type="tel" id="Phone" placeholder="+79130384577">
        <label class="form__label" for="Password">Введите ваш пароль</label>
        <input class="form__input" v-model="password" type="password" id="Password" placeholder="••••••">
        <div class="form__checkbox_div">
          <input class="form__checkbox" type="checkbox" id="Checkbox">
          <label class="form__checkbox_label" for="Checkbox">Запомни меня</label>
        </div>
        <button class="form__button" type="submit">Войти</button>
        <a class="form__ref" href="#">Регистрация</a>
        <a class="form__ref" href="#">Забыли пароль?</a>
      </form>
    </div>
  </template>
  
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
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('http://localhost:3000/auth/login', {
            phone: this.phone,
            password: this.password
          });
          console.log(response.data);
          if (response.data.error) {
            alert(response.data.error);
          } else {
            alert('Login successful!');
            // Store the token (response.data.token) in localStorage or Vuex for further use
            localStorage.setItem('authToken', response.data.token);
          }
        } catch (error) {
          console.error('There was an error!', error);
          alert('Failed to login. Please try again later.');
        }
      }
    }
  }
  </script>

<style>
.auth__main-container {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
    margin-top: 100px;
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
}

.form__button {
    border-radius: 20px;
    border: none;
    width: 156px;
    height: 56px;
    font-weight: 300;
    font-size: 20px;
    line-height: 120%;
    color: #000;
    background: #d9d9d9;
    align-self: center;
    margin-top: 15px;
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