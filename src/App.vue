<template>
  <Header />
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

import Header from '@/components/Header';

export default defineComponent({
  name: 'App',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header },
  setup() {
    return {}
  },
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body {
  font-family: 'Montserrat', sans-serif;
  overflow-y: hidden;
}

main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
</style>
