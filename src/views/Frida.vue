<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet">
  </head>
  <body>
    <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
    <audio id="revealaudio">
      <source src="../assets/sound/Revealsoundlayer1.wav" type="audio/wav">
    </audio>
    <div id="dogcloud">
      <p Id="dogTitleText">
        Ok, I minder om mig!<br>
        Er I med på en Challenge??
      </p>
      <img id="CloudSize" alt="Cloud" src="../assets/Images/Cloud.png">
      <p id="dogcloudText">Hej optursklasse! I er awesome, og jeg er Frida. <br>
      Jeg elsker at hygge og virkelig fordybe mig i ting.<br>
      Det virker til, at I har det lidt på samme måde her i klassen.  </p>
    </div>
    <div id="dogPos">
      <img src="../assets/Images/FridaHund.png">
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
  name: 'MyFrida',
  props: ['buttonAnswer', 'playclicksound', 'pauseclicksound', 'mutesounds'],
  created: function () {
    if (this.mutesounds === 0) {
      setTimeout(() => {
        this.playclicksound('revealaudio')
        setTimeout(() => {
          this.pauseclicksound('revealaudio')
        }, 2500)
      })
    }
  }
}

</script>

<style scoped>
input[type=text], [type=email], [type=message]  {
    left: 547.86px;
    top: 0px;
    width: 265.14px;
    height: 35px;
    font-family: Nunito;
    border-radius: 6px;
    background: #ffffff;
    background-blend-mode: normal;
}
</style>
