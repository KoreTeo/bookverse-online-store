<template>
  <div class="auth__main-container">
    <div class="auth__main-title">Регистрация</div>
    <form class="auth__form" @submit.prevent="registerUser">
      <label class="form__label" for="Email">E-mail<span class="reg_form__req">*</span></label>
      <input class="form__input" v-model="email" type="email" id="Email" placeholder="ro.rub@mail.ru" required>
      <label class="form__label" for="Firstname">Имя<span class="reg_form__req">*</span></label>
      <input class="form__input" v-model="firstName" type="text" id="Firstname" placeholder="Роман" required>
      <label class="form__label" for="Lastname">Фамилия<span class="reg_form__req">*</span></label>
      <input class="form__input" v-model="lastName" type="text" id="Lastname" placeholder="Рубцов" required>
      <label class="form__label" for="Phone">Телефон<span class="reg_form__req">*</span></label>
      <input class="form__input" v-model="phone" type="tel" id="Phone" placeholder="+79130384577" required>
      <label class="form__label" for="BirthDate">Дата рождения<span class="reg_form__req">*</span></label>
      <input class="form__input" v-model="birthday" type="date" id="BirthDate" placeholder="04.05.2004" required>
      <label class="form__label" for="Password">Пароль<span class="reg_form__req">*</span></label>
      <input class="form__input" v-model="password" type="password" id="Password" placeholder="••••••" required>
      <label class="form__label" for="PasswordConfirm">Подтверждение пароля<span class="reg_form__req">*</span></label>
      <input class="form__input" v-model="passwordConfirm" type="password" id="PasswordConfirm" placeholder="••••••"
        required>
      <button class="reg_form__button" type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Registration',
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      birthday: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    async registerUser() {
      if (this.password !== this.passwordConfirm) {
        alert('Passwords do not match!');
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/api/user/signup', {
          email: this.email,
          first_name: this.firstName,
          last_name: this.lastName,
          phone: this.phone,
          birthday: this.birthday,
          password: this.password,
        });
        if (response.data.message) {
          alert(response.data.message);
        } else {
          alert('Registration successful');
        }
        this.$router.push({ path: `/` })
      } catch (error) {
        console.error('There was an error!', error);
        alert('Failed to register. Please try again later.');
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
  padding: 26px 31px;
  border: none;
  background: #d9d9d9;
  border-radius: 20px;
  width: 500px;
  height: 80px;
  align-self: center;
  margin-bottom: 25px;
}

.form__input::placeholder {
  font-weight: 300;
  font-size: 24px;
  line-height: 120%;
  color: #000;
}

.reg_form__button {
  border-radius: 20px;
  border: none;
  width: 283px;
  height: 56px;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #FFF;
  background: #000aff;
  align-self: center;
  margin-top: 15px;
  cursor: pointer;
}

.reg_form__button:hover {
  opacity: 0.7;
}

.reg_form__button:active {
  opacity: 0.5;
}

.reg_form__req {
  color: red;
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