import {ref, onMounted, onUnmounted, Ref} from 'vue'

/**
 * 
 * @param elementRef dropdown组件Dom对象
 */
const useClickOutside = (elementRef: Ref<null | HTMLElement>): Ref<boolean> => {
  const isClickOutside = ref(false) // 是否点击在dropdown组件外面
  const handler = (e: MouseEvent) => {
    if (elementRef && elementRef.value) {
      // contains 方法可以检察 传入的 Dom元素 是否属于 调用 contains方法 的Dom元素。
      // 以此判断，当前点击对象是不是在 dropdown 组件范围内。
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        // 如果点击 dom 不在 dropdown组件内部
        isClickOutside.value = true
      } else {
        // 如果点击 dom 在 dropdown组件内部
        isClickOutside.value = false
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

  return isClickOutside
}

export default useClickOutside