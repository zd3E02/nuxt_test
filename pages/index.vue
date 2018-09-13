<template>

  <section class="container">
    <div>
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <nuxt-link to="/about" class="navbar-item">about</nuxt-link>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </nav>
    </div>

    <!-- <li>{{user.title.rendered}}</h1> -->
    <h1 v-html="user.content.rendered"></h1>
    <!-- <li v-for="(id,date,title,content) in user">{{user.id}}{{user.date}}{{user.title}}{{user.content}}</li> -->
  </section>

</template>

<script>
import axios from 'axios'
import MyTable from '../components/test_table.vue'
export default {
  async asyncData ({ params }) {
    const { data: user } = await axios.get(`http://zd3e02.sim.zdrv.com/wp02/wp-json/wp/v2/posts/5`)
    // const { data: user } = await axios.get(`https://api.github.com/users/${params.id}`)
    return {
      user
    }
    console.log(data);
  }
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