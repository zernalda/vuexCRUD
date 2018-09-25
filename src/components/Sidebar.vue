<template>
  <div class="sidebar">
    <h2>INI SIDEBAR</h2>
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

  .sidebar {
    flex: 1;
  }

</style>
