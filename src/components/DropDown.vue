<template>
  <div class="dropdown" ref="dropdownDom">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">你好 {{title}}</a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="display: block" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
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
    const handler = (e: MouseEvent) => {
      if (dropdownDom.value) {
        // contains 方法可以检察 传入的 Dom元素 是否属于 调用 contains方法 的Dom元素。
        // 以此判断，当前点击对象是不是在 dropdown 组件范围内。
        if (!dropdownDom.value.contains(e.target as HTMLElement) && isOpen.value) {
          isOpen.value = false
        }
      }
    }
    // 在挂载dropdown组件的时候监听click事件，判断是否是点击除dropdown组件以外的Dom节点，如果是，就将isOpen设置为false，如果不是，不做处理。
    onMounted(() => {
      document.addEventListener('click', handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handler)
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
