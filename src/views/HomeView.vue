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
    <div id="cloud">
      <img id="combinedSh" alt="Cloud" src="../assets/Images/Cloud.png">
      <p id="cloudtext">Vil I finde klasssens hund og lære hinanden bedre at kende? </p>
      <p id="cloudpressbtntxt">
      For at matche med en hund skal I sammen vælge, hvad I godt kan lide som klassen.<br>
      Undervejs lærer I måske noget nyt om klassen og hinanden.<br>
      Tryk på knappen for at starte.
      </p>
      <router-link to="/about">
        <button class="cloudbtn">Start</button>
      </router-link>
    </div>
    <div id="centercontainer">
      <div id="rectangle">
      </div>
      <div class="center">
        <button class="button" >Til Læreren</button> <button class="button" >Kontakt</button> <button class="button" >Sign up til WOOFS platform</button>
      </div>
    </div>
  </body>
</template>

<script>
// cd CLI --- CD woof ---- npm run serve
export default {
  name: 'HomeView',
  props: ['mutesounds', 'muteSound', 'Afdeling'],
  data: function () {
    return {
    }
  }
}
</script>
