<script>
import ArrowLeft from './img/ArrowLeft.vue';
import ArrowRight from './img/ArrowRight.vue';
import MainCompComp from './MainCompComp.vue';
export default {
  components: { ArrowLeft, ArrowRight, MainCompComp },
  data() {
    return {
      cards: [MainCompComp, MainCompComp, MainCompComp, MainCompComp, MainCompComp, MainCompComp, MainCompComp],
      innerStyles: {},
      step: ''
    }
  },
  mounted() {
    this.setStep()
  },
  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth // ❶
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px` // ❷
    },
    next() {
      this.moveLeft()
      this.afterTransition(() => { // ❶
        const card = this.cards.shift() // ❷
        this.cards.push(card) // ❸
      })
    },
    afterTransition(callback) {
      const listener = () => { // ❹
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener) // ❺
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})`
      }
    }
  }
}
</script>
<template>
  <div className="main__all">
    <p className="main__title">Новинки</p>
    <div className="main__with_arrows">
      <button className="main__arrow" @click="next">
        <ArrowLeft />
      </button>
      <ul className="main__list" v-for="card in cards" :key="card">
        {{ card }}
      </ul>
      <button className="main__arrow" @click="next">
        <ArrowRight />
      </button>
    </div>
  </div>
</template>
<style>
.inner {
  transition: transform 0.2s;
}

.main__with_arrows {
  display: flex;
}

.main__arrow {
  align-self: center;
  border: 1px solid;
  border-radius: 100px;
  width: 16px;
  height: 18px;
  padding-left: 4px;

}

.main__arrow:active {
  opacity: 0.8;
  background-color: gray;
}

.main__all {
  display: flex;
  flex-direction: column;
}

.main__title {
  font-weight: 400;
  font-size: 30px;
  line-height: 150%;
  margin-bottom: 20px;
}

.main__list {
  display: flex;
  column-gap: 80px;
  overflow: hidden;
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