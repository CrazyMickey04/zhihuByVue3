<template>
    <div class="info">
        <el-dropdown trigger="click">
            <el-button type="primary">
                {{title}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="item in dropList" :key="item.text">{{item.text}}</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface DropListProps {
  text: string
}
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    },
    dropList: {
      type: Array as PropType<DropListProps[]>,
      required: true
    }
  }
})
</script>
