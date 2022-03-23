<template>
  <head>
    <title> Vue 3 Basics</title>
  </head>
  <body>
    <div id="app">
      <audio autoplay loop>
        <source src="../assets/sound/Sample-wav-file.wav" type="audio/wav">
      </audio>
      <video v-if="video1" autoplay muted loop id="myVideo">
        <source src="../assets/video/video3.mp4" type="video/mp4">
      </video>
    </div>
    <div class="content">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div v-if="answerbtn">
        <button v-if="showbtn1" class="button" @click="addAnswer(1)">{{ btn1 }}</button>
        <button v-if="showbtn2" class="button" @click="addAnswer(2)">{{ btn2 }}</button>
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
        <ul v-if="findDog() === 'kalle'">
          <router-link to="/Kalle">
            <button class="button" >Find Hund</button>
          </router-link>
        </ul>
        <ul v-if="findDog() === 'tessa'">
          <router-link to="/Tessa">
          <button class="button" >Find Hund</button>
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
      video1: true,
      showButton: false,
      showbtn1: false,
      showbtn2: false,
      showFindDogbtn: false,
      answerbtn: true,
      btn1: 'inde',
      btn2: 'Ude'
    }
  },
  methods: {
    showButtonAfter5Seconds () {
      setTimeout(() => {
        this.showButton = true
        this.Pause_play_video()
        this.showbtn1 = true
        this.showbtn2 = true
      }, 5000)
    },
    addAnswer (value) {
      this.buttonAnswer.push(value)
      console.log(this.buttonAnswer)
      this.showButton = false
      this.Pause_play_video()
      this.newQuestion()
      this.showButtonAfter5Seconds()
      this.showbtn1 = false
      this.showbtn2 = false
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
        this.btn1 = 'Strand'
        this.btn2 = 'Bjerg'
      } else if (this.buttonAnswer.length === 2) {
        this.btn1 = 'Time'
        this.btn2 = 'Frikvarter'
      } else if (this.buttonAnswer.length === 3) {
        this.btn1 = 'Mange'
        this.btn2 = 'Få'
      } else if (this.buttonAnswer.length === 4) {
        setTimeout(() => {
          this.answerbtn = false
          this.showFindDogbtn = true
        }, 5000)
      } else {
        console.log('nothing changed')
      }
    },
    findDog () {
      if (this.buttonAnswer.at(0) === 1) {
        console.log('1')
        if (this.buttonAnswer.at(1) === 1) {
          console.log('1.1.')
          if (this.buttonAnswer.at(2) === 1) {
            console.log('1.1.1')
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('1.1.1.1')
                return 'charles'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('1.1.1.2')
                return 'frida'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('1.1.2.1')
                return 'charles'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('1.1.2.2')
                return 'charles'
              }
            }
          }
        } else if (this.buttonAnswer.at(1) === 2) {
          if (this.buttonAnswer.at(2) === 1) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('1.2.1.1')
                return 'charles'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('1.2.1.2')
                return 'frida'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('1.2.2.1')
                return 'charles'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('1.2.2.2')
                return 'charles'
              }
            }
          }
        }
      } else if (this.buttonAnswer.at(0) === 2) {
        if (this.buttonAnswer.at(1) === 1) {
          if (this.buttonAnswer.at(2) === 1) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('2.1.1.1')
                return 'bandit'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('2.1.1.2')
                return 'bandit'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('2.1.2.1')
                return 'bandit'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('2.1.2.2')
                return 'charles'
              }
            }
          }
        } else if (this.buttonAnswer.at(1) === 2) {
          if (this.buttonAnswer.at(2) === 1) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('2.2.1.1')
                return 'tessa'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('2.2.1.2')
                return 'tessa'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('2.2.2.1')
                return 'kalle'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('2.2.2.2')
                return 'tessa'
              }
            }
          }
        }
      }
    }
  },
  created: function () {
    this.showButtonAfter5Seconds()
  }
}

</script>
