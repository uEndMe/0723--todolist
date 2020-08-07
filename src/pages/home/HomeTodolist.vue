<template>
  <div class="page">
    <VTitle />
    <el-form
      class="content"
      action="javascript:void(0)"
    >
      <el-form-item class="inputBox">
        <el-input
          v-model="text"
          placeholder="请输入任务"
          @keyup.native.enter="add(text)"
        ></el-input>
      </el-form-item>
      <ul>
        <li
          v-for="(i,index) in datas"
          :key="i.id"
          :class="['item', {itemOn: i.on}]"
          @click="i.on = !i.on"
        >
          <div class="itemLeft">
            <el-checkbox
              v-model="i.on"
              class="checkbox"
              @change="i.on = !i.on"
            ></el-checkbox>{{i.str}}
          </div>
          <div class="itemRigth">
            <el-button
              type="text"
              size="mini"
              @click="del(index)"
            >删除</el-button>
          </div>
        </li>
        <li class="item">
          <div class="itemLeft">
            <el-checkbox
              v-model="all"
              class="checkbox"
            >全选 {{count + '/' + sum}}</el-checkbox>
          </div>
          <div class="itemRigth">
          </div>
          <div class="itemRigth">
            <el-button
              type="danger"
              size="mini"
              @click="delOn"
            >删除选中任务</el-button>
          </div>
        </li>
      </ul>

    </el-form>

  </div>

</template>


<script>
import VTitle from '@components/VTitle.vue'
import { getStorage, setStorage } from '@tools/storage.js'
import { debounce } from '@tools/index.js'
export default {
  name: 'HomeTodolist',
  components: { VTitle },
  data () {
    return {
      text: '',
      dataid: 4,
      datas: [
        { id: 1, str: '案例 todolist', on: false },
        { id: 2, str: '别名 pages', on: false },
        { id: 3, str: '优化 stylus', on: true }
      ]
    }
  },
  computed: {
    count () {
      return this.datas.reduce(
        (pre, i) => pre + i.on, 0
      )
    },
    sum () { return this.datas.length },
    all: {
      get () { return this.count / this.sum >= 1 },
      set (val) {
        this.datas.forEach(i => i.on = val)
      }
    }
  },
  watch: {
    // 更新本地存储
    datas: {
      handler (datas) {
        this.text = ''
        this.setStorage(datas)
      },
      deep: true
    }
  },
  created () {
    // 初始化数据
    let todolist = getStorage('todolist')
    if (todolist) {
      this.dataid = todolist.dataid
      this.datas = todolist.datas
    }
  },
  methods: {
    // 删除一条
    del (index) {
      this.datas.splice(index, 1)
    },
    // 添加一条
    add (str) {
      if (str === '') return
      this.datas.unshift({
        id: this.dataid++,
        str,
        on: false
      })
    },
    // 删除选中
    delOn () {
      let temp = this.datas.length
      while (temp--) {
        this.datas[temp].on && this.del(temp, 1)
      }
    },
    // 更新本地存储
    setStorage: debounce(function (datas) {
      setStorage('todolist', { datas, dataid: this.dataid })
    }, 100)
  }
}
</script> 

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.page
  direction(column)

.content
  flex 1
  margin 24px
  padding 24px
  border-radius 4px
  background-color #fff

.inputBox
  margin-bottom 40px

// 每个条目
.item
  display flex
  justify-content space-between
  align-items center
  height 24px
  padding 16px
  border-top 1px solid #DCDFE6
  font-size 14px
  color rgba(0, 0, 0, 0.65)
  cursor pointer

  /.itemOn
    background-color #fafafa

  /.itemLeft
    display flex
    align-items center

    /.checkbox
      padding-right 10px
</style>