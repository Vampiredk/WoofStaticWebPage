<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!--<div id="nav">
      <router-link to="/">Home</router-link>
      <div class="rightalign">
        <router-link to="/emails">
          <button>Skriv dig up?</button><button>Hvad er Woof?</button><button>Kontakt</button>
        </router-link>
      </div>
    </div>-->
  <router-view :clearAnswer="clearAnswer" :Emails="Emails" :addEmail="addEmail"/>
</template>

<script>
export default {
  data: function () {
    return {
      Emails: [],
      showButton: true
    }
  },
  methods: {

    addEmail (Email) {
      if (Email) {
        this.Emails.push(Email)
        console.log(this.Emails)
      } else {
        console.log('No Email Found')
      }
    }
  }
}
</script>

<style>

</style>
