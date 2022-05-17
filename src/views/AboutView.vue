<template>
  <head>
    <title> Vue 3 Basics</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet">
  </head>
  <body>
    <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
    <div id="rightalign">
      <button class="mutebutton" @click="muteSound()">
        <svg width="20.2742px" height="21.769104px" viewBox="0 0 20.2742 21.769104" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="filter_1">
              <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.19215687 0 0 0 0 0.21960784 0 0 0 0 0.27058825 0 0 0 1 0" />
            </filter>
          </defs>
          <g id="Speaker-03" filter="url(#filter_1)">
            <path d="M7.59982 1.24192C8.33926 0.50248 9.60357 1.02619 9.60357 2.07191L9.60357 18.6297C9.60357 19.6754 8.33926 20.1991 7.59982 19.4597L2.7592 14.619L1.17377 14.619C0.525518 14.619 0 14.0935 0 13.4453L0 7.25632C0 6.60806 0.525518 6.08255 1.17377 6.08255L2.7592 6.08255L7.59982 1.24192ZM7.46944 4.39041L3.98697 7.87288C3.76685 8.093 3.4683 8.21666 3.15699 8.21666L2.13413 8.21666L2.13413 12.4849L3.15699 12.4849C3.4683 12.4849 3.76685 12.6086 3.98697 12.8287L7.46944 16.3112L7.46944 4.39041Z" id="Shape" fill="#283238" fill-rule="evenodd" stroke="none" />
            <path d="M20.2742 10.8843C20.2742 5.61618 16.6383 1.19725 11.739 0L11.739 2.21333C15.4456 3.35291 18.1401 6.80396 18.1401 10.8843C18.1401 14.9654 15.4447 18.417 11.7369 19.5559L11.7369 21.7691C16.6372 20.5726 20.2742 16.1532 20.2742 10.8843Z" id="Path" fill="#7D909B" stroke="none" />
            <path d="M16.0059 10.8843C16.0059 8.0003 14.2457 5.52742 11.741 4.48136L11.741 6.89336C13.026 7.75505 13.8718 9.22088 13.8718 10.8843C13.8718 12.5487 13.025 14.0153 11.7387 14.8768L11.7387 17.2882C14.2447 16.2427 16.0059 13.7692 16.0059 10.8843Z" id="Path" fill="#7D909B" stroke="none" />
          </g>
        </svg>
      </button>
    </div>
    <br>
    <div v-if="startfindhud" id="startfindhund">
      <div>
        <audio id="dogbark1audio">
          <source src="../assets/sound/bark1.wav" type="audio/wav">
        </audio>
        <audio id="dogbark2audio">
          <source src="../assets/sound/bark2.wav" type="audio/wav">
        </audio>
        <audio id="questionaudio">
          <source src="../assets/sound/question.wav" type="audio/wav">
        </audio>
        <audio id="revealwaitingaudio">
          <source src="../assets/sound/Revealsoundlayer2.wav" type="audio/wav">
        </audio>
        <audio id="clickaudio">
          <source src="../assets/sound/clickselect.wav" type="audio/wav">
        </audio>
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
        <p id="videocloudTxt" v-if="questiontxt">{{ txt1 }}</p>
        <P id="videocloudbtntxt" v-if="questiontxt">{{ txt2 }}</p>
        <button class="cloudvideobtn" v-if="answerbtn" @click="addAnswer(1)">{{ btn1 }}</button>
        <button class="cloudvideobtn" v-if="answerbtn" @click="addAnswer(2)">{{ btn2 }}</button>
      </div>
    </div>
    <div v-if="verdener">
      <img id="verden1" alt="7verdener" src="../assets/Images/verden1.png">
      <img id="verden2" alt="7verdener" src="../assets/Images/verden2.png">
      <img id="verden3" alt="7verdener" src="../assets/Images/verden3.png">
      <img id="verden4" alt="7verdener" src="../assets/Images/verden4.png">
      <img id="verden5" alt="7verdener" src="../assets/Images/verden5.png">
      <img id="verden6" alt="7verdener" src="../assets/Images/verden6.png">
      <img id="verden7" alt="7verdener" src="../assets/Images/verden7.png">
      <img id="Verdencloud" alt="Cloud" v-if="showcloudsky" src="../assets/Images/Cloud.png">
      <p id="verdentxt" v-if="questiontxt">Allerførst</p>
      <p id="verdentxt2" v-if="questiontxt">hvilken klasse I går i?</p>
      <br>
      <button class="verdenbtn" @click="addklassetrin('Indskoling')">0.-3 klasse</button>
      <button class="verdenbtn" @click="addklassetrin('Mellemtrin')">4. -6 klasse</button>
      <button class="verdenbtn" @click="addklassetrin('Udskoling')">7. -10 klasse</button>
    </div>
    <div v-if="finddogbool">
      <img id="logoblacop" alt="Woof Logo" src="../assets/Images/WoofLogo.png">
      <br>
      <img id="boneloading" src="../assets/Images/LoadingBone.png">
      <p id="bonetxt" v-if="bonetxt1" >...matcher med klassehund...</p>
      <p id="bonetxt2" v-if="bonetxt2" >Jeres hund er fundet</p>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'AboutView',
  props: ['mutesounds', 'muteSound', 'playclicksound', 'pauseclicksound', 'Afdeling', 'addAfdeling', 'klassenssvar'],
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
      playingV: 0,
      btn1: 'Undervisning',
      btn2: 'Frikvarter',
      txt1: 'Mon det er en naturhund?',
      txt2: 'Hvad kan I bedst lide? '
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
      if (this.mutesounds === 0) {
        this.playclicksound('clickaudio')
      }
    },
    Pause_play_video () {
      if (this.playingV === 0) {
        const video = document.getElementById('FV')
        document.getElementById('FV').style.opacity = '1'
        video.play()
        this.playingV = 1
        console.log(this.playingV)
        setTimeout(() => {
          video.pause()
          if (this.mutesounds === 0) {
            this.playclicksound('questionaudio')
          }
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV === 1) {
        const video1 = document.getElementById('CV')
        document.getElementById('CV').style.opacity = '1'
        video1.play()
        this.playingV = 2
        console.log(this.playingV)
        setTimeout(() => {
          video1.pause()
          if (this.mutesounds === 0) {
            this.playclicksound('questionaudio')
          }
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV === 2) {
        const video2 = document.getElementById('NV')
        document.getElementById('NV').style.opacity = '1'
        video2.play()
        this.playingV = 3
        console.log(this.playingV)
        setTimeout(() => {
          video2.pause()
          if (this.mutesounds === 0) {
            this.playclicksound('questionaudio')
          }
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV === 3) {
        const video3 = document.getElementById('SV')
        document.getElementById('SV').style.opacity = '1'
        video3.play()
        this.playingV = 4
        console.log(this.playingV)
        setTimeout(() => {
          video3.pause()
          if (this.mutesounds === 0) {
            this.playclicksound('questionaudio')
          }
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV === 4) {
        const video4 = document.getElementById('UWV')
        document.getElementById('UWV').style.opacity = '1'
        video4.play()
        this.playingV = 5
        console.log(this.playingV)
        setTimeout(() => {
          video4.pause()
          if (this.mutesounds === 0) {
            this.playclicksound('questionaudio')
          }
          this.showcloud = true
          this.answerbtn = true
        }, 7500)
      } else if (this.playingV > 4) {
        console.log('playingV er over 4')
        if (this.$Afdeling === 'Mellemtrin' || this.$Afdeling === 'Udskoling') {
          console.log('årgng er mellemtrin eller udskoling')
          if (this.playingV === 5) {
            const video5 = document.getElementById('CCV')
            console.log('testtest')
            document.getElementById('CCV').style.opacity = '1'
            console.log('start playing circusV')
            video5.play()
            this.playingV = 6
            console.log(this.playingV)
            setTimeout(() => {
              video5.pause()
              if (this.mutesounds === 0) {
                this.playclicksound('questionaudio')
              }
              this.showcloud = true
              this.answerbtn = true
            }, 7500)
          } else if (this.playingV === 6) {
            const video6 = document.getElementById('BV')
            document.getElementById('BV').style.opacity = '1'
            video6.play()
            this.playingV = 6
            console.log(this.playingV)
            setTimeout(() => {
              video6.pause()
              if (this.mutesounds === 0) {
                this.playclicksound('questionaudio')
              }
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
        console.log(this.$Afdeling)
        if (this.$Afdeling === 'Indskoling') {
          this.finddogbool = true
          this.questiontxt = false
          this.showcloud = false
          this.showcloudsky = false
          this.answerbtn = false
          this.finddog()
          this.removeVideo()
          this.$klassenssvar = this.buttonAnswer.toString()
          if (this.mutesounds === 0) {
            this.playclicksound('revealwaitingaudio')
          }
          setTimeout(() => {
            this.pauseclicksound('revealwaitingaudio')
            if (this.charlesbtn === true) {
              this.$router.push({ path: '/charles' })
            } else if (this.fridabtn === true) {
              this.$router.push({ path: '/frida' })
            } else if (this.banditbtn === true) {
              this.$router.push({ path: '/bandit' })
            } else if (this.tessabtn === true) {
              this.$router.push({ path: '/tessa' })
            }
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
            this.answerbtn = false
            this.finddog()
            this.removeVideo()
            if (this.mutesounds === 0) {
              this.playclicksound('revealwaitingaudio')
            }
            setTimeout(() => {
              this.bonetxt1 = false
              setTimeout(() => {
                this.pauseclicksound('revealwaitingaudio')
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
      this.txt2 = 'Vælg en af knapperne for at komme videre'
      console.log('Play city')
      if (this.mutesounds === 1) {
        this.CityM = false
      } else {
        this.CityM = true
      }
      this.ForestV = false
      this.ForestM = false
    },
    ChangeToUnderwater () {
      this.btn1 = 'Sammen'
      this.btn2 = 'Hver for sig'
      this.txt1 = 'Eller måske en vandhund?'
      console.log('Play underwater')
      if (this.mutesounds === 1) {
        this.UnderwaterM = false
      } else {
        this.UnderwaterM = true
      }
      this.SpaceV = false
      this.SpaceM = false
    },
    ChangeToSpace () {
      this.btn1 = 'Brætspil'
      this.btn2 = 'Boldspil'
      this.txt1 = 'Hvad med en rumhund?'
      console.log('Play space')
      if (this.mutesounds === 1) {
        this.SpaceM = false
      } else {
        this.SpaceM = true
      }
      this.NightV = false
      this.NightM = false
    },
    ChangeToNight () {
      this.btn1 = 'Ro'
      this.btn2 = 'Energi'
      this.txt1 = 'Mon det er en nathund?'
      console.log('Play night')
      if (this.mutesounds === 1) {
        this.NightM = false
      } else {
        this.NightM = true
        setTimeout(() => {
          this.playclicksound('dogbark2audio')
        }, this.randomdogsoundGen())
      }
      this.CityV = false
      this.CityM = false
    },
    ChangeToCircus () {
      this.btn1 = 'Fremlæggelse'
      this.btn2 = 'Opgaver'
      this.txt1 = 'Ok, hva’ med en cirkushund?'
      console.log('Play circus')
      if (this.mutesounds === 1) {
        this.CircusM = false
      } else {
        this.CircusM = true
      }
      this.UnderwaterV = false
      this.UnderwaterM = false
    },
    ChangteToBeach () {
      this.btn1 = 'Leg'
      this.btn2 = 'Lektier'
      this.txt1 = 'Måske en strandhund?'
      console.log('Play beach')
      if (this.mutesounds === 1) {
        this.BeachM = false
      } else {
        this.BeachM = true
      }
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
      if (value === 'Indskoling') {
        this.addAfdeling('Indskoling')
      } else if (value === 'Mellemtrin') {
        this.addAfdeling('Mellemtrin')
      } else if (value === 'Udskoling') {
        this.addAfdeling('Udskoling')
      }
      console.log(this.$Afdeling)
      this.verdener = false
      document.getElementById('startfindhund').style.opacity = '1'
      document.getElementById('FV').style.opacity = '1'
      if (this.mutesounds === 1) {
        this.ForestM = false
      } else {
        this.ForestM = true
        setTimeout(() => {
          this.playclicksound('dogbark1audio')
        }, this.randomdogsoundGen())
      }
      this.Pause_play_video()
      this.CityV = true
      console.log(this.Afdeling)
    },
    randomdogsoundGen () {
      return Math.floor(Math.random() * 7001) + 1001
    }
  },
  created: function () {
  }
}

</script>
