<template>
    <div class="header_wrap">
        <div class="title">知乎专栏</div>
        <ul v-if="!user.isLogin" class="login_before">
            <li>
                <el-button type="primary" plain>登录</el-button>
            </li>
            <li>
                <el-button type="primary" plain>注册</el-button>
            </li>
        </ul>
        <ul v-else>
            <DropDown :title="`你好!${user.name}`" :dropList="dropList"/>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown, { DropListProps } from './DropDown.vue'
const dropListData: DropListProps[] = [
  { text: '新建文章' },
  { text: '编辑资料' },
  { text: '退出登录' }
]
export interface UserPros {
  isLogin: boolean;
  name?: string;
  is?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserPros>,
      required: true
    }
  },
  components: {
    DropDown
  },
  setup () {
    return {
      dropList: dropListData
    }
  }
})
</script>
<style lang="scss">
    .header_wrap {
        display: flex;
        justify-content: space-between;
        height: 60px;
        line-height: 60px;
        padding: 0 50px;
        background: #06f;
        color: #fff;
        .title {
            font-size: 20px;
        }
        .login_before {
            display: flex;
            li {
                margin: 0 10px;
            }
        }
    }
</style>
