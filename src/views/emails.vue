<template>
    <div id="app">
      <div v-for="post in posts" v-bind:key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
        <div class="container">
            <form @submit.prevent="sendEmail">
            <label>Name</label>
            <input
                type="text"
                v-model="name"
                name="name"
                placeholder="Your Name"
            >
            <label>Email</label>
            <input
                type="email"
                v-model="email"
                name="email"
                placeholder="Your Email"
                >
            <input type="submit" value="Send">
            </form>
        </div>
      <button @click="addWoof()">gem</button>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'
import axios from 'axios'
const url = 'https://woofrestservice20220324090401.azurewebsites.net/api/woof'

export default {
  name: 'MyEmails',
  data () {
    return {
      savethis: 'supercool',
      addData: { id: 0, emails: toString(this.savethis), skole: 'HJORTESPRING', klasse: '4x', Afdeling: 'indskoling', Hund: 'Bandit', klassensSvar: '1,1,1,1' }
    }
  },
  methods: {
    sendEmail (e) {
      try {
        emailjs.sendForm('service_sfmumua', 'template_vd3nvb8', e.target, '31drUeLFvBRJZ1O7E', {
          name: this.name,
          email: this.email,
          message: this.message
        })
      } catch (error) {
        console.log({ error })
      }
    },
    async getData () {
      try {
        const response = await axios.get(url)
        // JSON responses are automatically parsed.
        this.posts = await response.data
        console.log(this.posts)
      } catch (error) {
        console.log(error)
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
  },
  async created () {
    this.addWoof()
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
    left: 547.86px;
    top: 0px;
    width: 265.14px;
    height: 58px;
    border-radius: 6px;
    background: #ffffff;
    background-blend-mode: normal;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
