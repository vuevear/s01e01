import { reactive, toRefs } from 'vue'

export default function(url, options) {
  const state = reactive({
    res: [],
    err: null,
    isFetching: false
  })

  const fetchData = async function () {
    state.isFetching = true

    try {
      const res = await fetch(url, options)
      state.res = await res.json()
    } catch (err) {
      state.err = err
    } finally {
      state.isFetching = false
    }
  }

  return { ...toRefs(state), fetchData }
}
