<script>
import MainCompDiv from '../components/MainCompComp.vue';
import FooterDiv from '@/components/FooterDiv.vue';
import HeaderDiv from '@/components/HeaderDiv.vue';
export default {
  components: { MainCompDiv, HeaderDiv, FooterDiv },
  data() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>

<template>
  <div className="main__main_page">
    <main className="main">
      <MainCompDiv />
      <MainCompDiv />
      <MainCompDiv />
    </main>
  </div>
</template>

<style>
.main__main_page {
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  width: 1240px;
  align-items: center;
}

.main {
  display: flex;
  row-gap: 80px;
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