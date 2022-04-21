<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet">
  </head>
  <body>
    <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
    <audio id="revealwaitingaudio">
      <source src="../assets/sound/Revealsoundlayer2.wav" type="audio/wav">
    </audio>
    <audio id="revealaudio">
      <source src="../assets/sound/Revealsoundlayer1.wav" type="audio/wav">
    </audio>
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
      <img src="../assets/Images/BanditHund2.png">
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
import emailjs from 'emailjs-com'
import axios from 'axios'
const url = 'https://woofrestservice20220324090401.azurewebsites.net/api/woof'

export default {
  name: 'MyBandit',
  props: ['buttonAnswer', 'playclicksound', 'pauseclicksound', 'Afdeling', 'klassenssvar'],
  data () {
    return {
      name: 'test',
      email: 'test',
      message: 'test1234',
      posts: [],
      addData: { id: 0, emails: this.email, skole: this.name, klasse: this.message, Afdeling: this.$Afdeling, Hund: 'Bandit', klassensSvar: this.$klassensSvar }
    }
  },
  methods: {
    sendEmail (e) {
      try {
        emailjs.sendForm('service_sfmumua', 'template_vd3nvb8', e.target, '31drUeLFvBRJZ1O7E', {
          name: this.name,
          email: this.email,
          message: this.message
        })
      } catch (error) {
        console.log({ error })
      }
      this.addWoof()
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }
  },
  created: function () {
    if (this.mutesounds === 0) {
      setTimeout(() => {
        this.playclicksound('revealaudio')
        setTimeout(() => {
          this.pauseclicksound('revealaudio')
          this.playclicksound('revealwaitingaudio')
        }, 2500)
      })
    }
  },
  async addWoof () {
    try {
      const response = await axios.post(url, this.addData)
      this.addMessage = 'response ' + response.status + ' ' + response.statusText
      this.getData()
    } catch (ex) {
      alert(ex.message)
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
