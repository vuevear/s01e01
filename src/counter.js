import { ref, computed } from 'vue'

export default function counter () {
  const index = ref(1)
  const double = computed(() => index.value * 2)
  const increment = () => index.value +=1

  return {
    index,
    increment,
    double
  }
}
