<template>
  <div>
    <h3>我是孙组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：一辆{{ car.brand }}，价值 {{ car.price }}万元</h4>
    <button @click="updateMoney(6)">花爷爷的钱</button>
  </div>
</template>

<script setup lang="ts" name="">
import { inject } from 'vue';

  let {money, updateMoney} = inject('moneyContext', {
    money: 0,
    updateMoney: (value:number) => {}
  })
  let car = inject('car', {
    brand: '未知',
    price: 0
  })
</script>