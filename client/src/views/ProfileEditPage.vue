<script>
import axios from 'axios';
import ProfileNavigationDiv from '../components/ProfileNavigation.vue';
import router from '@/router';

export default {
  components: { ProfileNavigationDiv },
  data() {
    return {
      user: {
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        newpassword: '',
        newpasswordConfirm: ''
      }
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const response = await axios.get('http://localhost:3000/api/user/data', {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
      }
      )
        .then((res) =>
          this.user = res.data
        )
        .catch((error) => {
          console.error('Failed to fetch user data:', error);

        })
    },
    async updateUserData() {
      try {
        if (this.user.newpassword !== this.user.newpasswordConfirm) {
          alert('Passwords do not match!');
          return;
        }
        await axios.put('http://localhost:3000/api/user/edit', this.user, { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } });
        alert('User updated successfully!');
      } catch (error) {
        console.error('Failed to update user data:', error);
      }
    }
  }
};
</script>

<template>
  <div class="main_profile">
    <ProfileNavigationDiv />
    <div class="auth__main-container">
      <form class="auth__form" @submit.prevent="updateUserData">
        <label class="form__label" for="Email">E-mail</label>
        <input class="form__input" type="email" id="Email" v-model="user.email" placeholder="ro.rub@mail.ru">

        <label class="form__label" for="Firstname">Имя</label>
        <input class="form__input" type="text" id="Firstname" v-model="user.first_name" placeholder="Роман">

        <label class="form__label" for="Lastname">Фамилия</label>
        <input class="form__input" type="text" id="Lastname" v-model="user.last_name" placeholder="Рубцов">

        <label class="form__label" for="Phone">Телефон</label>
        <input class="form__input" type="tel" id="Phone" v-model="user.phone" placeholder="+79130384577">

        <label class="form__label" for="Password">Новый пароль</label>
        <input class="form__input" type="password" id="Password" v-model="user.newpassword" placeholder="••••••">

        <label class="form__label" for="PasswordConfirm">Подтверждение нового пароля</label>
        <input class="form__input" type="password" id="PasswordConfirm" v-model="user.newpasswordConfirm"
          placeholder="••••••">

        <button class="form__button" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.main_profile {
  display: flex;
  column-gap: 162px;
  margin-top: 140px;
  justify-content: space-between;
  width: 1440px;
  
}

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
  font-weight: 400;
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

.form__button {
  border-radius: 20px;
  border: none;
  width: 187px;
  height: 52px;
  font-weight: 500;
  font-size: 26px;
  line-height: 120%;
  color: #000;
  background: #000aff;
  color: #fff;
  align-self: flex-end;
  margin-top: 15px;
  cursor: pointer;
}

.form__button:hover {
  opacity: 0.7;
}

.form__button:active {
  opacity: 0.7;
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
