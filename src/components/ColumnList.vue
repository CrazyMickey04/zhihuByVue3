<template>
  <el-row :gutter="20" class="container">
    <el-col :span="8" v-for="column in list" :key="column.id" class="list_wrap">
      <el-card shadow="hover" :body-style="{ height: '300px', textAlign: 'center'}">
        <img :src="column.avatar" :alt="column.title">
        <h5>{{column.title}}</h5>
        <p class="desc">{{column.description}}</p>
        <el-button type="primary" plain>进入专栏</el-button>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang= 'scss'>
.container {
  padding: 20px;
}
.list_wrap {
  margin-bottom: 20px;
  img {
    width: 100px;
    height: 100px;
  }
  h5 {
    font-size: 18px;
    margin: 10px 0;
  }
  .desc {
    text-align: left;
    margin-bottom: 20px;
  }
}
</style>
