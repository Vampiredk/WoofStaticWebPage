<template>
  <head>
     <title> Vue 3 Basics</title>
  </head>
  <body>
    <div id="app">
      <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
      <!--<h1 id="logoblacop"></h1>-->
      <br>
      {{ buttonAnswer }}
      <div class="a">
        <h1 class="vililrerhi">
          Vil i lærer hinanden bedre at kende i jeres klasse?
        </h1>
      <router-link to="/about">
        <!--<button id="oval"></button>
        <a href="#" class="group"></a>-->
      </router-link>
      </div>
    </div>
  </body>
</template>

<script>
// cd CLI --- CD woof ---- npm run serve
export default {
  name: 'HomeView',
  props: []

}
</script>
