<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="column in columnListData" :key="column.id">
      <div class="card h-100 shadow-sm" >
        <div class="card-body text-center">
          <img :src="column.avatar" class="card-img-top w-25 my-4 rounded-circle" >
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, computed } from 'vue'
export interface ClumnListProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<ClumnListProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnListData = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/column.png')
        }
        return column
      })
    })
    return {
      columnListData
    }
  }
})
</script>

<style scoped>

</style>
