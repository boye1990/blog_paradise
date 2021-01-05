<template>
  <li class="dropdown-option" :class="{'isDisabled': disabled}">
    <slot></slot>
  </li>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style>
 .dropdown-option.isDisabled * {
   pointer-events: none;
   color: #6c757d;
   background-color: transparent
 }
</style>
