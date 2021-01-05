<template>
  <div class="dropdown" ref="dropdownDom">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">你好 {{title}}</a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="display: block" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropdownDom = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    // 是否点击在当前组件外部
    const isClickOutside = useClickOutside(dropdownDom)

    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        isOpen.value = false
      }
    })

    return {
      isOpen,
      toggleOpen,
      dropdownDom
    }
  }
})
</script>

<style>

</style>
