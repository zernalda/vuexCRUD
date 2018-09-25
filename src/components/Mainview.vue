<template>
  <div class="mainview">
    <h2>INI MAINVIEW</h2>
    <member v-for="member in members" :member="member"></member>
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
      'members'
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
    flex: 3;
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
