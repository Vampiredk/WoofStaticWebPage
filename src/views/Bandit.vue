<template>
  <body>
    <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
    <div id="dogcloud">
      <p Id="dogTitleText">
        Ok, I minder om mig!<br>
        Er I med på en Challenge??
      </p>
      <img id="CloudSize" alt="Cloud" src="../assets/Images/Cloud.png">
      <p id="dogcloudText">Hello freaks. I er awesome og jeg er Bandit! <br>
      Da jeg var hvalp, havde jeg altid super meget krudt i røven <br>
      og det var ikke altid nemt at sidde stille i timerne. <br>
      Det virker til, at I har noget af den samme energi her i klassen.</p>
    </div>
    <div id="dogPos">
      <img src="../assets/Images/BanditHund.png">
    </div>
    <div id="centercontainer">
      <div id="rectangle">
      </div>
      <div class="center">
          <input type="checkbox" id="vehicle2" name="vehicle2">
          <label for="vehicle2">Jeg er også enig i dette punkt, lorem ipsum amet</label><br>
          <input type="checkbox" id="vehicle1" name="vehicle1">
          <label for="vehicle1">Få tilsendt klassens besvarelse og resultat og hør mere når den nye platform kommer til august.</label><br>
        <form @submit.prevent="sendEmail">
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Indtast kontakt email"
          >
          <input
            type="text"
            v-model="name"
            name="name"
            placeholder="Indtast klassens skole"
          >
          <input
            type="message"
            v-model="message"
            name="message"
            placeholder="Indtast Klassen"
          >
          <input type="submit" value="Send">
        </form>>
      </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'MyBandit',
  props: []
}
</script>

<style scoped>
input[type=text], [type=email], [type=message]  {
    left: 547.86px;
    top: 0px;
    width: 265.14px;
    height: 35px;
    border-radius: 6px;
    background: #ffffff;
    background-blend-mode: normal;
}
</style>
