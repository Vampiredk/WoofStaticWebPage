<template>
  <head>
     <title> Vue 3 Basics</title>
  </head>
  <body>
    <div class="centeralign">
      <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
    </div>
    <br>
    <img id="combinedSh" alt="Cloud" src="../assets/Images/Cloud.png">
    <router-link to="/about">
    </router-link>
    <div id="centercontainer">
      <div id="rectangle">
      </div>
      <div class="center">
        <button id="center" class="button" >Gratis Sign up</button> <button class="button" >Vil du vide mere om Woof?</button> <button class="button" >Kontakt: Woof@wooftech.dk +45 27 14 04 00</button>
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
