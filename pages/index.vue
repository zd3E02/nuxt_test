<template>
   <section class="container">
      <div>
        <div v-for="(id,type) in post_list" v-bind:key='id'>
          <a>{{type}}</a>
        </div>
      </div>
    <!-- <li>{{user.title.rendered}}</h1> -->
    <!-- <li v-for="(id,date,title,content) in user">{{user.id}}{{user.date}}{{user.title}}{{user.content}}</li> -->
  </section>
</template>

<script>
  import wpApi from '../api/wpapi';
  import {mapState} from 'vuex';

  export default {
    async fetch({store}){
      let response = await wpApi.get_posts();
      store.commit('post_list_update',response)
    },
    computed: mapState(['post_list'],["type"]),
    layout: '../layouts/default'
  }
</script>


<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.container img{
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
}
</style>