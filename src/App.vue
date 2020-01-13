<template>
  <div class="todo-container">
    <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/>
        <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
        <TodoFooter :todos="todos" :selectAllCheck="selectAllCheck" :deleteCompleteTodos="deleteCompleteTodos"/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      todos: JSON.parse(window.localStorage.getItem('todos_key')) || []
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAllCheck (check) {
      this.todos.forEach(function (todo) {
        todo.complete = check
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: function (value) {
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  }
}
</script>

<style  scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
