<template>
<div class="todo-footer">
  <label>
    <input type="checkbox" v-model="isAllCheck" />
  </label>
  <span>
    <span>已完成{{checked}}</span> / 全部{{todos.length}}
  </span>
  <button class="btn btn-danger" @click="deleteCompleteTodos" v-show="checked">清除已完成任务</button>
</div>
</template>

<script>
export default {
  props: {
    todos: Array,
    selectAllCheck: Function,
    deleteCompleteTodos: Function
  },
  computed: {
    checked () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllCheck: {
      get () {
        return this.checked === this.todos.length && this.todos.length
      },
      set (value) {
        this.selectAllCheck(value)
      }
    }
  }
}
</script>

<style  scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
