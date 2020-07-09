<template>
   <!-- Hello World -->
  <section>
    <h1>{{ hello }}</h1>
    <button @click="increment">
      Incrementar Indice
    </button>
    <h2>{{ index }} - {{ double }}</h2>
  </section>

  <section>
    <!-- Interaccion con Fetch -->
    <h1>Fetch</h1>
    <button @click="fetchData">Cargar Data</button>
    <p v-show="isFetching">Cargando...</p>
    <ul>
      <li v-for="post in res" :key="post.id">{{ post.title }}</li>
    </ul>
  </section>
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
    const { index, increment, double } = useCounter()

    onMounted(() => console.log('Mounted...'))
    const { res, isFetching, fetchData } = useFetch('https://jsonplaceholder.typicode.com/posts')

    return {
      hello,
      index,
      double,
      increment,

      fetchData,
      res,
      isFetching
    }
  }
}
</script>


<style>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: sans-serif;
    padding: 1rem;
  }

  h1 {
    font-size: 5rem;
  }

  button {
    font-size: 3rem;
    padding: 0.5rem;
  }

  section {
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  ul {
    padding: 0 2rem
  }
</style>