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
    <div id="cloud" v-if="answerbtn">
      <img id="videoCloud" alt="Cloud" src="../assets/Images/Cloud.png">
      <button class="cloudvideobtn" @click="addAnswer(1)">{{ btn1 }}</button>
      <button class="cloudvideobtn" @click="addAnswer(2)">{{ btn2 }}</button>
    </div>
      <div v-if="showFindDogbtn">
        <ul v-if="findDog() === 'charles'">
          <router-link to="/Charles">
            <button class="button" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="findDog() === 'bandit'">
          <router-link to="/Bandit">
            <button class="button" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="findDog() === 'frida'">
          <router-link to="/Frida">
            <button class="button" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="findDog() === 'tessa'">
          <router-link to="/Tessa">
          <button class="button" >Find Hund</button>
          </router-link>
        </ul>
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
      showButton: false,
      showFindDogbtn: false,
      answerbtn: false,
      btn1: 'Undervisning',
      btn2: 'Frikvarter'
    }
  },
  methods: {
    showButtonAfter5Seconds () {
      setTimeout(() => {
        this.showButton = true
        this.Pause_play_video()
        this.answerbtn = true
      }, 7500)
    },
    addAnswer (value) {
      this.buttonAnswer.push(value)
      console.log(this.buttonAnswer)
      this.showButton = false
      this.Pause_play_video()
      this.newQuestion()
      this.showButtonAfter5Seconds()
      this.answerbtn = false
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
      }
      if (this.buttonAnswer.length === 2) {
        this.ChangeToNight()
      }
      if (this.buttonAnswer.length === 3) {
        this.ChangeToSpace()
      }
      if (this.buttonAnswer.length === 4) {
        this.ChangeToUnderwater()
      } else {
        console.log('error')
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
                // frida
                return ('frida')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // frida
                return ('frida')
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Charles
                return ('charles')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Charles
                return ('charles')
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            console.log('Energi')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // frida
                return ('frida')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // frida
                return ('frida')
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Tessa
                return ('tessa')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Tessa
                return ('tessa')
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
                // Charles
                return ('charles')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Charles
                return ('charles')
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // frida
                return ('frida')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // frida
                return ('frida')
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            console.log('Energi')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Charles
                return ('charles')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Charles
                return ('charles')
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Bandit
                return ('bandit')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Bandit
                return ('bandit')
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
                // frida
                return ('frida')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // frida
                return ('frida')
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Tessa
                return ('tessa')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Tessa
                return ('tessa')
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            console.log('Energi')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Tessa
                return ('tessa')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Tessa
                return ('tessa')
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Tessa
                return ('tessa')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Tessa
                return ('tessa')
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
                // Charles
                return ('charles')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Charles
                return ('charles')
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Bandit
                return ('bandit')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Bandit
                return ('bandit')
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            console.log('Energi')
            if (this.buttonAnswer.at(3) === 1) {
              console.log('Brætspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Bandit
                return ('bandit')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Bandit
                return ('bandit')
              }
            } else if (this.buttonAnswer.at(3) === 2) {
              console.log('boldspil')
              if (this.buttonAnswer.at(4) === 1) {
                console.log('Hver for sig')
                // Bandit
                return ('bandit')
              } else if (this.buttonAnswer.at(4) === 2) {
                console.log('Sammen')
                // Bandit
                return ('bandit')
              }
            }
          }
        }
      }
    },

    ChangeToCity () {
      this.btn1 = 'Alenearbejde'
      this.btn2 = 'Gruppearbejde'
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
    }
  },
  created: function () {
    this.showButtonAfter5Seconds()
  }
}

</script>
