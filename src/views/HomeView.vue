<template>
  <head>
     <title> Vue 3 Basics</title>
  </head>
  <body>
    <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
    <br>
    <div id="cloud">
      <img id="combinedSh" alt="Cloud" src="../assets/Images/Cloud.png">
      <p id="cloudtext">Vil i lære hinanden <br>
      bedre at kende i <br>
      jeres klassen?</p>
      <router-link to="/about">
        <button class="cloudbtn">Begynd at lede :)</button>
      </router-link>
    </div>
    <div id="centercontainer">
      <div id="rectangle">
      </div>
      <div class="center">
        <button class="button" >Gratis Sign up</button> <button class="button" >Vil du vide mere om Woof?</button> <button class="button" >Kontakt: Woof@wooftech.dk +45 27 14 04 00</button>
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
