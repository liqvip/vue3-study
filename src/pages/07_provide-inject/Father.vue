<template>
  <div>
    <h3>父组件</h3>
    <h4>银子：{{ money }} 万元</h4>
    <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }} 万元</h4>
    <Child/>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, ref } from 'vue';
import Child from './Child.vue';

  let money = ref(100)
  let car = reactive({
    brand: '奔驰',
    price: 100
  })

  function updateMoney(value:number){
    money.value += value 
  }

  // 向后代组件提供数据
  provide('moneyContext', {money, updateMoney})
  provide('car', car)
</script>