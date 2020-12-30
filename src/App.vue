<template>
  <div class="containers">
    <ColumnList :list='list'></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ClumnListProps } from './components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const list: ClumnListProps[] = [
  {
    id: 1,
    title: 'test1专栏',
    avatar: 'https://c-ssl.duitang.com/uploads/blog/202010/15/20201015161554_8c9ee.jpeg',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下哦'
  },
  {
    id: 2,
    title: 'test2专栏',
    avatar: 'https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=c38f70c0b012c8fcb4f3f6c5cc0292b4/bc93d1160924ab18262fe3d73cfae6cd7a890b0e.jpg',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下哦'
  },
  {
    id: 3,
    title: 'test3专栏',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下哦'
  },
  {
    id: 4,
    title: 'test4专栏',
    avatar: 'http://pic354.nipic.com/file/20201224/30084000_165229630001_2.jpg',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下哦这是test1专栏，有一段非常有意思的简介，可以更新一下哦'
  },
  {
    id: 5,
    title: 'test5专栏',
    avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3661508197,3824138137&fm=26&gp=0.jpg',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下哦这是test1专栏，有一段非常有意思的简介，可以更新一下哦这是test1专栏，有一段非常有意思的简介，可以更新一下哦'
  },
  {
    id: 6,
    title: 'test6专栏',
    avatar: 'http://pic355.nipic.com/file/20201225/18387586_163655212000_2.jpg',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下哦这是test1专栏，有一段非常有意思的简介，可以更新一下哦'
  },
  {
    id: 7,
    title: 'test7专栏',
    avatar: 'http://pic239.nipic.com/file/20190909/1534243_160159394089_2.jpg',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下哦'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list
    }
  }
})
</script>

<style scoped>
.containers {
  margin: 0;
  padding: 20px;
}
</style>
