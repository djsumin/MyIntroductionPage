<template>
  <div class="app-container">
      <TheHeaderNav/>
      <RouterView/>
    <footer>
      <ul class="bottom">
        <li><p>copyright ⓒ 2023 All rights reserved by suminlee.</p></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
import TheHeaderNav from './views/common/TheHeaderNav.vue';


</script>

<style>
* {
  background-color: #F3EEEA;
  font-family: 'SUIT-Regular';
}


.bottom{
  list-style-type: none;
  text-align: center;
}

footer{
  margin-top: auto;
  padding: 10px;
  text-align: center;
}

@font-face {
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}


</style>