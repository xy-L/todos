<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComments="addComments"/>
      <List :comments='comments' :deleteContent="deleteContent"/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'

export default {
  components: {
    Add,
    List
  },
  data () {
    return {
      comments: [
        {
          'name': 'aaa',
          'content': 'aaa'
        },
        {
          'name': 'bbb',
          'content': 'bbb'
        },
        {
          'name': 'ccc',
          'content': 'ccc'
        }
      ]
    }
  },
  methods: {
    addComments (comment) {
      this.comments.unshift(comment)
    },
    deleteContent (index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
