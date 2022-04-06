<template>
  <head>
    <title> Vue 3 Basics</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet">
  </head>
  <body>
    <div v-if="startfindhud" id="startfindhund">
      <div>
        <audio v-if="ForestM" autoplay loop>
          <source src="../assets/sound/Forest.wav" type="audio/wav">
        </audio>
        <audio v-if="BeachM" autoplay loop>
          <source src="../assets/sound/Beach.wav" type="audio/wav">
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
        <video v-if="ForestV" loop class="myVideo" id="FV">
          <source src="../assets/video/Forest.mp4" type="video/mp4">
        </video>
        <video v-if="BeachV" loop class="myVideo" id="BV">
          <source src="../assets/video/Beach.mp4" type="video/mp4">
        </video>
        <video v-if="CircusV" loop class="myVideo" id="CCV">
          <source src="../assets/video/Circus.mp4" type="video/mp4">
        </video>
        <video v-if="CityV" loop class="myVideo" id="CV">
          <source src="../assets/video/City.mp4" type="video/mp4">
        </video>
        <video v-if="NightV" loop class="myVideo" id="NV">
          <source src="../assets/video/Night.mp4" type="video/mp4">
        </video>
        <video v-if="SpaceV" loop class="myVideo" id="SV">
          <source src="../assets/video/Space.mp4" type="video/mp4">
        </video>
        <video v-if="UnderwaterV" loop class="myVideo" id="UWV">
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
    </div>
    <div v-if="verdener">
      <img id="VerdenPos" alt="7verdener" src="../assets/Images/7verdener.png">
      <img id="Verdencloud" alt="Cloud" v-if="showcloudsky" src="../assets/Images/Cloud.png">
      <p id="verdentxt" v-if="questiontxt">
        Inden vi leder efter hunden<br>
      skal vi vide hvilken klasse I går i?</p>
      <button class="verdenbtn" @click="addklassetrin('Indskoling')">Indskoling</button>
      <button class="verdenbtn" @click="addklassetrin('Mellemtrin')">Mellemtrin</button>
      <button class="verdenbtn" @click="addklassetrin('Udskoling')">Udskoling</button>
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
      BeachV: true,
      BeachM: false,
      CircusV: true,
      CircusM: false,
      CityV: true,
      CityM: false,
      ForestV: true,
      ForestM: false,
      NightV: true,
      NightM: false,
      SpaceV: true,
      SpaceM: false,
      UnderwaterV: true,
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
      verdener: true,
      startfindhud: true,
      Årgang: '',
      playingV: 0,
      btn1: 'Undervisning',
      btn2: 'Frikvarter',
      txt1: 'Mon det er en naturhund?',
      txt2: 'Vælg en knap, for at komme vider.'
    }
  },
  methods: {
    addAnswer (value) {
      this.buttonAnswer.push(value)
      console.log(this.buttonAnswer)
      this.showcloud = false
      console.log('under 5 length')
      this.newQuestion()
      this.Pause_play_video()
      this.answerbtn = false
    },
    Pause_play_video () {
      if (this.playingV === 0) {
        var video = document.getElementById('FV')
        document.getElementById('FV').style.opacity = '1'
        video.play()
        this.playingV = 1
        console.log(this.playingV)
        setTimeout(() => {
          video.pause()
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV === 1) {
        var video1 = document.getElementById('CV')
        document.getElementById('CV').style.opacity = '1'
        video1.play()
        this.playingV = 2
        console.log(this.playingV)
        setTimeout(() => {
          video1.pause()
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV === 2) {
        var video2 = document.getElementById('NV')
        document.getElementById('NV').style.opacity = '1'
        video2.play()
        this.playingV = 3
        console.log(this.playingV)
        setTimeout(() => {
          video2.pause()
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV === 3) {
        var video3 = document.getElementById('SV')
        document.getElementById('SV').style.opacity = '1'
        video3.play()
        this.playingV = 4
        console.log(this.playingV)
        setTimeout(() => {
          video3.pause()
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV === 4) {
        var video4 = document.getElementById('UWV')
        document.getElementById('UWV').style.opacity = '1'
        video4.play()
        this.playingV = 5
        console.log(this.playingV)
        setTimeout(() => {
          video4.pause()
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV > 4) {
        console.log('playingV er over 4')
        console.log(this.Årgang)
        if (this.Årgang === 'Mellemtrin' || this.Årgang === 'Udskoling') {
          console.log('årgng er mellemtrin eller udskoling')
          if (this.playingV === 5) {
            var video5 = document.getElementById('CCV')
            document.getElementById('CCV').style.opacity = '1'
            console.log('start playing circusV')
            video5.play()
            this.playingV = 6
            console.log(this.playingV)
            setTimeout(() => {
              video5.pause()
              this.showcloud = true
              this.answerbtn = true
            }, 7500)
          } else if (this.playingV === 6) {
            var video6 = document.getElementById('BV')
            document.getElementById('BV').style.opacity = '1'
            video6.play()
            this.playingV = 6
            console.log(this.playingV)
            setTimeout(() => {
              video6.pause()
              this.showcloud = true
              this.answerbtn = true
            }, 7500)
          }
        }
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
        if (this.Årgang === 'Indskoling') {
          this.finddogbool = true
          this.questiontxt = false
          this.showcloud = false
          this.showcloudsky = false
          this.finddog()
          this.removeVideo()
          setTimeout(() => {
            this.bonetxt1 = false
            this.bonetxt2 = true
            setTimeout(() => {
              if (this.charlesbtn === true) {
                this.$router.push({ path: '/charles' })
              } else if (this.fridabtn === true) {
                this.$router.push({ path: '/frida' })
              } else if (this.banditbtn === true) {
                this.$router.push({ path: '/bandit' })
              } else if (this.tessabtn === true) {
                this.$router.push({ path: '/tessa' })
              }
            }, 1000)
          }, 8000)
        } else {
          if (this.buttonAnswer.length === 5) {
            this.ChangeToCircus()
          } else if (this.buttonAnswer.length === 6) {
            this.ChangteToBeach()
          } else {
            this.finddogbool = true
            this.questiontxt = false
            this.showcloud = false
            this.showcloudsky = false
            this.finddog()
            this.removeVideo()
            setTimeout(() => {
              this.bonetxt1 = false
              setTimeout(() => {
                if (this.charlesbtn === true) {
                  this.$router.push({ path: '/charles' })
                } else if (this.fridabtn === true) {
                  this.$router.push({ path: '/frida' })
                } else if (this.banditbtn === true) {
                  this.$router.push({ path: '/bandit' })
                } else if (this.tessabtn === true) {
                  this.$router.push({ path: '/tessa' })
                }
              }, 1000)
            }, 8000)
          }
        }
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
      this.ForestV = false
      this.ForestM = false
      this.CityM = true
    },
    ChangeToUnderwater () {
      this.btn1 = 'Sammen'
      this.btn2 = 'Hver for sig'
      this.txt1 = 'Eller måske en vandhund?'
      this.SpaceV = false
      this.SpaceM = false
      this.UnderwaterM = true
    },
    ChangeToSpace () {
      this.btn1 = 'Brætspil'
      this.btn2 = 'Boldspil'
      this.txt1 = 'Hvad med en rumhund?'
      this.SpaceM = true
      this.NightV = false
      this.NightM = false
    },
    ChangeToNight () {
      this.btn1 = 'Ro'
      this.btn2 = 'Energi'
      this.txt1 = 'Mon det er en nathund?'
      this.CityV = false
      this.CityM = false
      this.NightM = true
    },
    ChangeToCircus () {
      this.btn1 = 'Brætspil'
      this.btn2 = 'Boldspil'
      this.txt1 = 'Ok, hva’ med en cirkushund?'
      this.UnderwaterV = false
      this.UnderwaterM = false
      this.CircusM = true
    },
    ChangteToBeach () {
      this.btn1 = 'Leg'
      this.btn2 = 'Lektier'
      this.txt1 = 'Måske en strandhund?'
      this.BeachM = true
      this.CircusV = false
      this.CircusM = false
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
    },
    addklassetrin (value) {
      this.Årgang = value
      this.verdener = false
      document.getElementById('startfindhund').style.opacity = '1'
      document.getElementById('FV').style.opacity = '1'
      this.ForestM = true
      this.Pause_play_video()
      this.CityV = true
      console.log(this.Årgang)
    }
  },
  created: function () {
  }
}

</script>
