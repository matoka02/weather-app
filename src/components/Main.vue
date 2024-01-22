<template>
  <Weather />
</template>

<script>
import { defineComponent } from 'vue';

import Weather from '@/components/Weather';

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Main',
  components: { Weather },
  setup() {
    return {
    }
  }
})
</script>

<style scoped></style>