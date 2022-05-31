<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet">
  </head>
  <body>
    <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
    <audio id="revealaudio">
      <source src="../assets/sound/Revealsoundlayer1.wav" type="audio/wav">
    </audio>
    <audio id="revealwaitingaudio">
      <source src="../assets/sound/Revealsoundlayer2.wav" type="audio/wav">
    </audio>
    <div id="dogcloud">
      <p Id="dogTitleText">
        Hej! minder I om mig?<br>
        Og, er I med på en Challenge??
      </p>
      <img id="CloudSize" alt="Cloud" src="../assets/Images/Cloud.png">
      <p id="dogcloudText">Hej optursklasse! I er awesome, og jeg er Frida. <br>
      Jeg elsker at hygge og virkelig fordybe mig i ting.<br>
      Det virker til, at I har det lidt på samme måde her i klassen.</p>
    </div>
    <div id="dogPos">
      <img src="../assets/Images/FridaHund.png">
    </div>
    <div id="centercontainer" class="special">
      <div id="rectangle">
      </div>
      <div class="center">
          <div id="mc_embed_signup">
          <form action="https://wooftech.us10.list-manage.com/subscribe/post?u=58418e04e0390722eae306770&amp;id=2216d5e044" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Indtast din email adresse
          </label>
            <input type="email" placeholder="mail@eksempel.dk" value="" name="EMAIL" class="required email" id="mce-EMAIL">
          </div>
          <div hidden="true"><input type="hidden" name="tags" value="12613038"></div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_58418e04e0390722eae306770_2216d5e044" tabindex="-1" value=""></div>
              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
              </div>
          </form>
          </div>
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
  name: 'MyFrida',
  props: ['buttonAnswer', 'playclicksound', 'pauseclicksound', 'Afdeling', 'klassenssvar'],
  data () {
    return {
      name: 'test',
      email: 'test2',
      message: 'lækkert',
      posts: [],
      saveemails: this.message,
      addData: { id: 0, emails: this.saveemails, skole: this.name, klasse: this.message, Afdeling: this.Afdeling, Hund: 'Bandit', klassensSvar: this.klassensSvar }
    }
  },
  methods: {
    sendEmail (e) {
      // gøre brug af dette mail sending system https://www.emailjs.com/
      // i skal starte med at lave en email service, med jeres fortrykkende email
      // Opret nogle template
      // den første parameter er for email service ID
      // den anden parameter er for email template ID
      // den tredje paremeter er for din public key
      try {
        emailjs.sendForm('service_sfmumua', 'template_vd3nvb8', e.target, '31drUeLFvBRJZ1O7E', {
          name: this.name,
          email: this.email,
          message: this.message
        })
      } catch (error) {
        console.log({ error })
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
    async getData () {
      try {
        const response = await axios.get(url)
        // JSON responses are automatically parsed.
        this.posts = await response.data
        console.log(this.posts)
      } catch (error) {
        console.log(error)
      }
    },
    async addWoof () {
      this.saveemails = 'super'
      try {
        const response = await axios.post(url, this.addData)
        this.addMessage = 'response ' + response.status + ' ' + response.statusText
        this.getData()
      } catch (ex) {
        alert(ex.message)
      }
    }
  },
  created: function () {
    console.log(this.klassensSvar)
    if (this.mutesounds === 0) {
      setTimeout(() => {
        this.playclicksound('revealaudio')
        setTimeout(() => {
          this.pauseclicksound('revealaudio')
          this.playclicksound('revealwaitingaudio')
          console.log(this.Afdeling)
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
