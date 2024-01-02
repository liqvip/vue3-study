import { ref } from "vue";

export default function (){
  // 数据
  const sum = ref(0)

  // 方法
  function add(){
    sum.value += 1
  }

  // 给外部提供东西
  return {sum, add}
}