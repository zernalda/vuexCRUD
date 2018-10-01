<template>
  <div class="mainview">
    <div v-if="singleView">
     <!-- cuma 1 data -->
    <h1>Single View</h1>
    <!-- oper props member -->
    <member :member="active_member" :allowImg="true"></member>
    <!-- kasih inputan untuk edit data -->
    <!-- v-model - untuk menghubungkan data ke field mana -->
    <input type="text" placeholder="isi nama! " v-model="active_member.name" >
    <br>
    <input type="text" placeholder="isi Goals! " v-model="active_member.goal" >
    <br>
    <input type="text" placeholder="isi foto! " v-model="active_member.img" >
    </div>
    <div v-else>
       <h2>Team</h2>
      <member v-for="member in members" :allowImg="true" :member="member"></member>
    </div>
  </div>
</template>

<script>

import Member from './Member'

// sebelum dipake view nya harus diimport dulu
// cara set dengan kata kunci key<nama>
import { mapGetters } from 'vuex'

export default {
  // masukan property untuk data
  computed: {
    // untuk mengambil data di state melalui getters
    ...mapGetters([
        'members',
        // cek singleView nya true atau false
        'singleView',
        console.log('singleView'),
        'active_member'
        // 'allowImg'
    ])
  },
  components: {
      Member
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .mainview {
    flex: 2;
  }

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
