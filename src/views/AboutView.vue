<template>
  <head>
    <title> Vue 3 Basics</title>
  </head>
  <body>
    <div>
      <audio v-if="ForestM" autoplay loop>
        <source src="../assets/sound/Forest.wav" type="audio/wav">
      </audio>
      <audio v-if="BeachM" autoplay loop>
        <source src="../assets/sound/Forest.wav" type="audio/wav">
      </audio>
      <audio v-if="CircusM" autoplay loop>
        <source src="../assets/sound/Circus.wav" type="audio/wav">
      </audio>
      <audio v-if="CityM" autoplay loop>
        <source src="../assets/sound/City.wav" type="audio/wav">
      </audio>
      <audio v-if="NightM" autoplay loop>
        <source src="../assets/sound/Night.wav" type="audio/wav">
      </audio>
      <audio v-if="SpaceM" autoplay loop>
        <source src="../assets/sound/Space.wav" type="audio/wav">
      </audio>
      <audio v-if="UnderwaterM" autoplay loop>
        <source src="../assets/sound/Underwater.wav" type="audio/wav">
      </audio>
      <video v-if="ForestV" autoplay muted loop id="myVideo">
        <source src="../assets/video/Forest.mp4" type="video/mp4">
      </video>
      <video v-if="BeachV" autoplay muted loop id="myVideo">
        <source src="../assets/video/Beach.mp4" type="video/mp4">
      </video>
      <video v-if="CircusV" autoplay muted loop id="myVideo">
        <source src="../assets/video/Circus.mp4" type="video/mp4">
      </video>
      <video v-if="CityV" autoplay muted loop id="myVideo">
        <source src="../assets/video/City.mp4" type="video/mp4">
      </video>
      <video v-if="NightV" autoplay muted loop id="myVideo">
        <source src="../assets/video/Night.mp4" type="video/mp4">
      </video>
      <video v-if="SpaceV" autoplay muted loop id="myVideo">
        <source src="../assets/video/Space.mp4" type="video/mp4">
      </video>
      <video v-if="UnderwaterV" autoplay muted loop id="myVideo">
        <source src="../assets/video/Underwater.mp4" type="video/mp4">
      </video>
    </div>
    <div id="cloud" v-if="showcloud">
      <img id="videoCloud" alt="Cloud" v-if="showcloudsky" src="../assets/Images/Cloud.png">
      <p id="videocloudTxt" v-if="questiontxt">
      {{ txt1 }}<br>
      {{ txt2 }}<br></p>
      <button class="cloudvideobtn" v-if="answerbtn" @click="addAnswer(1)">{{ btn1 }}</button>
      <button class="cloudvideobtn" v-if="answerbtn" @click="addAnswer(2)">{{ btn2 }}</button>
    </div>
    <div v-if="showFindDogbtn">
        <ul v-if="charlesbtn">
          <router-link to="/Charles">
            <button class="finddogbtn" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="banditbtn">
          <router-link to="/Bandit">
            <button class="finddogbtn" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="fridabtn">
          <router-link to="/Frida">
            <button class="finddogbtn" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="tessabtn">
          <router-link to="/Tessa">
          <button class="finddogbtn" >Find Hund</button>
          </router-link>
        </ul>
    </div>
    <div v-if="finddogbool">
      <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
      <div id="rightalign">
        <img alt="mutebtn" src="../assets/Images/Soundbtn.png">
      </div>
      <br>
      <img id="boneloading" src="../assets/Images/LoadingBone.png">
      <p id="bonetxt" v-if="bonetxt1" >. . . Leder efter jeres hund . . .</p>
      <p id="bonetxt2" v-if="bonetxt2" >Jeres hund er fundet</p>
      <div v-if="bonetxt2">
        <ul v-if="charlesbtn">
          <router-link to="/Charles">
            <button class="bonefinddogbtn" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="bonetxt1">
          <router-link to="/Bandit">
            <button class="bonefinddogbtn" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="fridabtn">
          <router-link to="/Frida">
            <button class="bonefinddogbtn" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="tessabtn">
          <router-link to="/Tessa">
          <button class="bonefinddogbtn" >Find Hund</button>
          </router-link>
        </ul>
      </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'AboutView',
  props: [],
  data: function () {
    return {
      buttonAnswer: [],
      BeachV: false,
      BeachM: false,
      CircusV: false,
      CircusM: false,
      CityV: false,
      CityM: false,
      ForestV: true,
      ForestM: true,
      NightV: false,
      NightM: false,
      SpaceV: false,
      SpaceM: false,
      UnderwaterV: false,
      UnderwaterM: false,
      fridabtn: false,
      tessabtn: false,
      charlesbtn: false,
      banditbtn: false,
      showcloud: false,
      showFindDogbtn: false,
      answerbtn: false,
      finddogbool: false,
      questiontxt: true,
      showcloudsky: true,
      bonetxt1: true,
      bonetxt2: false,
      btn1: 'Undervisning',
      btn2: 'Frikvarter',
      txt1: 'Mon det er en naturhund?',
      txt2: 'Vælg en knap, for at komme vider.'
    }
  },
  methods: {
    showButtonAfter5Seconds () {
      setTimeout(() => {
        this.showcloud = true
        this.Pause_play_video()
        if (this.finddogbool === false) {
          this.answerbtn = true
        } else {
          this.showFindDogbtn = true
        }
      }, 7500)
    },
    addAnswer (value) {
      this.buttonAnswer.push(value)
      console.log(this.buttonAnswer)
      this.showcloud = false
      if (this.buttonAnswer.length >= 5) {
        this.Pause_play_video()
        this.newQuestion()
        this.showButtonAfter5Seconds()
        this.answerbtn = false
      } else {
        this.newQuestion()
      }
    },
    Pause_play_video () {
      var video = document.getElementById('myVideo')
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    },
    newQuestion () {
      if (this.buttonAnswer.length === 1) {
        this.ChangeToCity()
      } else if (this.buttonAnswer.length === 2) {
        this.ChangeToNight()
      } else if (this.buttonAnswer.length === 3) {
        this.ChangeToSpace()
      } else if (this.buttonAnswer.length === 4) {
        this.ChangeToUnderwater()
      } else if (this.buttonAnswer.length >= 5) {
        this.finddogbool = true
        this.questiontxt = false
        this.showcloud = false
        this.showcloudsky = false
        this.finddog()
        this.removeVideo()
        setTimeout(() => {
          this.bonetxt1 = false
          this.bonetxt2 = true
        }, 9000)
      }
    },

    finddog () {
      if (this.buttonAnswer.at(0) === 1) {
        console.log('Undervisning')
        if (this.buttonAnswer.at(1) === 1) {
          console.log('Alenearbejde')
          if (this.buttonAnswer.at(2) === 1) {
            console.log('Ro')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.fridabtn = true
                // frida
                return 'frida'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.fridabtn = true
                // frida
                return 'frida'
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.charlesbtn = true
                // Charles
                return 'charles'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.charlesbtn = true
                // Charles
                return 'charles'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            console.log('Energi')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.fridabtn = true
                // frida
                return 'frida'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.fridabtn = true
                // frida
                return 'frida'
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.tessabtn = true
                // Tessa
                return 'tessa'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.tessabtn = true
                // Tessa
                return 'tessa'
              }
            }
          }
        } else if (this.buttonAnswer.at(1) === 2) {
          console.log('Gruppearbejde')
          if (this.buttonAnswer.at(2) === 1) {
            console.log('Ro')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.charlesbtn = true
                // Charles
                return 'charles'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.charlesbtn = true
                // Charles
                return 'charles'
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.fridabtn = true
                // frida
                return 'frida'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.fridabtn = true
                // frida
                return 'frida'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            console.log('Energi')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.charlesbtn = true
                // Charles
                return 'charles'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.charlesbtn = true
                // Charles
                return 'charles'
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.banditbtn = true
                // Bandit
                return 'bandit'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.banditbtn = true
                // Bandit
                return 'bandit'
              }
            }
          }
        }
      } else if (this.buttonAnswer.at(0) === 2) {
        console.log('Frikvarter')
        if (this.buttonAnswer.at(1) === 1) {
          console.log('Alenearbejde')
          if (this.buttonAnswer.at(2) === 1) {
            console.log('Ro')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.fridabtn = true
                // frida
                return 'frida'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.fridabtn = true
                // frida
                return 'frida'
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.tessabtn = true
                // Tessa
                return 'tessa'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.tessabtn = true
                // Tessa
                return 'tessa'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            console.log('Energi')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.tessabtn = true
                // Tessa
                return 'tessa'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.tessabtn = true
                // Tessa
                return 'tessa'
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.tessabtn = true
                // Tessa
                return 'tessa'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.tessabtn = true
                // Tessa
                return 'tessa'
              }
            }
          }
        } else if (this.buttonAnswer.at(1) === 2) {
          console.log('Gruppearbejde')
          if (this.buttonAnswer.at(2) === 1) {
            console.log('Ro')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.charlesbtn = true
                // Charles
                return 'charles'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.charlesbtn = true
                // Charles
                return 'charles'
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.banditbtn = true
                // Bandit
                return 'bandit'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.banditbtn = true
                // Bandit
                return 'bandit'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            console.log('Energi')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.banditbtn = true
                // Bandit
                return 'bandit'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.banditbtn = true
                // Bandit
                return 'bandit'
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                this.banditbtn = true
                // Bandit
                return 'bandit'
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                this.banditbtn = true
                // Bandit
                return 'bandit'
              }
            }
          }
        }
      }
    },

    ChangeToCity () {
      this.btn1 = 'Alenearbejde'
      this.btn2 = 'Gruppearbejde'
      this.txt1 = 'Eller måske en byhund?'
      this.CityV = true
      this.CityM = true
      setTimeout(() => {
        this.ForestV = false
      }, 500)
      this.ForestM = false
    },
    ChangeToUnderwater () {
      this.btn1 = 'Sammen'
      this.btn2 = 'Hver for sig'
      this.txt1 = 'Eller måske en vandhund?'
      this.UnderwaterM = true
      this.UnderwaterV = true
      setTimeout(() => {
        this.SpaceM = false
      }, 500)
      this.SpaceV = false
    },
    ChangeToSpace () {
      this.btn1 = 'Brætspil'
      this.btn2 = 'Boldspil'
      this.txt1 = 'Hvad med en rumhund?'
      this.SpaceM = true
      this.SpaceV = true
      setTimeout(() => {
        this.NightM = false
      }, 500)
      this.NightV = false
    },
    ChangeToNight () {
      this.btn1 = 'Ro'
      this.btn2 = 'Energi'
      this.txt1 = 'Mon det er en nathund?'
      this.NightM = true
      this.NightV = true
      setTimeout(() => {
        this.CityM = false
      }, 500)
      this.CityV = false
    },
    ChangeToCircus () {
      this.btn1 = 'Brætspil'
      this.btn2 = 'Boldspil'
      this.CircusM = true
      this.CircusV = true
      setTimeout(() => {
        this.SpaceM = false
        this.NightM = false
      }, 500)
      this.SpaceV = false
      this.NightV = false
    },
    ChangteToBeach () {
      this.btn1 = 'Hver for sig'
      this.btn2 = 'Sammen'
      this.BeachM = true
      this.beachV = true
      setTimeout(() => {
        this.CircusM = false
      }, 500)
      this.CircusV = false
    },
    removeVideo () {
      this.BeachV = false
      this.BeachM = false
      this.CircusV = false
      this.CircusM = false
      this.CityV = false
      this.CityM = false
      this.ForestV = false
      this.ForestM = false
      this.NightV = false
      this.NightM = false
      this.SpaceV = false
      this.SpaceM = false
      this.UnderwaterV = false
      this.UnderwaterM = false
    }
  },
  created: function () {
    this.showButtonAfter5Seconds()
  }
}

</script>
