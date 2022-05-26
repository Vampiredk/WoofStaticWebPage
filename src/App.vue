<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <router-view
  :mutesounds="mutesounds"
  :muteSound="muteSound"
  :playclicksound="playclicksound"
  :Afdeling="Afdeling"
  :pauseclicksound="pauseclicksound"
  :addAfdeling="addAfdeling"
  :klassenssvar="klassenssvar"
  />

  <Sidebaars
  :klassenssvar="klassenssvar"
  />
</template>

<script>
import Sidebaars from './components/Side-baars.vue'

export default {
  components: {
    Sidebaars
  },

  data: function () {
    return {
      klassenssvar: '5',
      Emails: [],
      showButton: true,
      mutesounds: 0,
      Afdeling: ''
    }
  },
  methods: {
    muteSound () {
      if (this.mutesounds === 1) {
        this.mutesounds = 0
        alert('Lyden er blevet tændt')
      } else {
        this.mutesounds = 1
        alert('Lyden er blevet slukket')
      }
      console.log(this.mutesounds)
    },
    playclicksound (value) {
      var audio = document.getElementById(value)
      audio.currentTime = 0
      audio.play()
    },
    pauseclicksound (value) {
      var audio = document.getElementById(value)
      audio.pause()
    },
    addAfdeling (value) {
      this.klassenssvar = value
      console.log(this.klassenssvar)
    }
  }
}
</script>

<style>

</style>
