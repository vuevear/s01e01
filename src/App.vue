<template>

  <!--  Hello World
  <h1 v-show="false">{{ hello  }}</h1>
  <button @click="increment">
    +
  </button>
  {{ index }} -->

  <!-- Interaccion con Fetch -->
  <button @click="fetchData">Cargar</button>
  <ul>
    <li v-for="post in res" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<script>
import { ref, onMounted } from 'vue'
import useCounter from './counter.js'
import useFetch from './fetch.js'

function hi () {
  const hello = ref("hello!")
  return { hello }
}

export default {
  name: 'App',

  setup () {
    const { hello } = hi()
    const { index, increment } = useCounter()

    onMounted(() => console.log('Mounted...'))
    const { res, isFetching, fetchData } = useFetch('https://jsonplaceholder.typicode.com/posts')

    return {
      hello,
      index,
      increment,
      fetchData,
      res,
      isFetching
    }
  }
}
</script>
