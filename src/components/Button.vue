<template>
  <span :class="['button']">{{ text }}</span>
</template>

<style lang="scss" scoped>
.button {
  padding: 6px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #eb6100;
  margin-left: 12px;
  cursor: pointer;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    }
  },
})
</script>
