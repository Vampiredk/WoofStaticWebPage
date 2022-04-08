<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <router-view :mutesounds="mutesounds" :muteSound="muteSound" :playclicksound="playclicksound" :pauseclicksound="pauseclicksound"/>
</template>

<script>

export default {

  data: function () {
    return {
      Emails: [],
      showButton: true,
      mutesounds: 0
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
    }
  }
}
</script>

<style>

</style>
