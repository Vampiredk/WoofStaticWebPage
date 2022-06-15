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
        Hej! minder I om mig?<br>
        Og, er I med på en Challenge??
      </p>
      <img id="CloudSize" alt="Cloud" src="../assets/Images/Cloud.png">
      <p id="dogcloudText">Hej seje mennesker. Jeg er Charles<br>
      og jeg tror lidt jeg elsker jer! Jeg elsker for det meste<br>
      at lave ting sammen med andre og elsker at hygge.<br>
      Det virker til at I har det lidt på samme måde her i klassen.</p>
    </div>
    <div id="dogPos">
      <img src="../assets/Images/charles.png">
    </div>
    <div id="centercontainer" class="special">
      <div id="rectangle">
      </div>
      <div class="center">
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
        <form action="https://wooftech.us10.list-manage.com/subscribe/post?u=58418e04e0390722eae306770&amp;id=2216d5e044" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
          <h2>Få tilsendt klassens challenge </h2>
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
        </label>
          <input type="email" value="" placeholder="Indtast e-mail" name="EMAIL" class="required email" id="mce-EMAIL">
        </div>
        <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
            <div class="content__gdpr">
                <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                  <label class="checkbox subfield" for="gdpr_59506"><input required type="checkbox" id="gdpr_59506" name="gdpr[59506]" value="Y" class="av-checkbox "><span>Ja, tak jeg vil gerne modtage en challenge og tilmelde mig WOOFs nyhedsbrev</span> </label>
                </fieldset>
                  <p>Når du siger ja til at modtage klassens challenge tilmelder du dig samtidig WOOFs nyhedsbrev med nyheder, tilbud, information om nye produkter og services mv.
                  <br><br>
                  Du kan i vores <a href="https://wooftech.dk/privatlivspolitik/" target="_blank">persondatapolitik</a> læse mere om hvordan vi behandler dine personoplysninger, samt hvilke rettigheder, du har. Du kan til enhver tid afmelde dig vores nyhedsbrev via et link i e-mailen. Du kan til enhver tid afmelde dig vores nyhedsbrev via et link i e-mailen</p>
            </div>
            <div class="content__gdprLegal">
                <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
            </div>
        </div>
        <div hidden="true"><input type="hidden" name="tags" value="12613042"></div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_58418e04e0390722eae306770_2216d5e044" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Send challenge" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
            </div>
        </form>
        </div>
        <!--End mc_embed_signup-->
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
  name: 'MyCharles',
  props: ['buttonAnswer', 'playclicksound', 'pauseclicksound', 'Afdeling', 'klassenssvar'],
  data () {
    return {
      name: '',
      email: '',
      message: '',
      posts: [],
      addData: { id: 0, emails: this.email, skole: this.name, klasse: this.message, Afdeling: this.$Afdeling, Hund: 'Bandit', klassensSvar: this.$klassensSvar }
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
input[type=text], input[type=email], input[type=message]  {
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
