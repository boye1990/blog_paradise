
<template>
  <div class="validate-input-container pd-3">
    <input
      type="text"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    >
    <span v-if="inputRef.error" class="invalid-feedback"> {{inputRef.message}} </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export type RulesProp = RuleProp[]
export default defineComponent({
  name: 'ValidateInput',
  // 禁用 Attribute 继承， 不让绑定属性添加在父节点上
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<RulesProp>
    },
    modelValue: String
  },
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      console.log(inputRef)
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        console.log(allPassed)
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>
