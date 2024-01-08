<template>
  <div>
    <h2>Vue3 组件通信方式</h2>
    <!-- 导航区 -->
    <ul>
      <li>
        <RouterLink to="/props">1.props</RouterLink>
      </li>
      <li>
        <RouterLink to="/event">2.自定义事件</RouterLink>
      </li>
      <li>
        <RouterLink to="/mitt">3.mitt</RouterLink>
      </li>
      <li>
        <RouterLink to="/model">4.v-model</RouterLink>
      </li>
      <li>
        <RouterLink to="/attrs">5.$attrs</RouterLink>
      </li>
      <li>
        <RouterLink to="/ref-parent">6.$refs、$parent</RouterLink>
      </li>
      <li>
        <RouterLink to="/provide-inject">7.provide、inject</RouterLink>
      </li>
      <li>
        <RouterLink to="/pinia">8.pinia</RouterLink>
      </li>
      <li>
        <RouterLink to="/slot">9.slot</RouterLink>
      </li>
    </ul>

    <!-- 展示区 -->
    <div>
      <RouterView/>
    </div>
  </div>
</template>