<template>
  <div class="sidebar">
    <h2>INI SIDEBAR</h2>
    <!-- prevent untuk menghilangkan sifat behavior dari fungsi tersebut -->
    <!-- native dipakai karenan mengambil dari component -->
   <member v-for="member in members" :member="member" @click.native.prevent="showMember(member)"></member>
  </div>
</template>

<script>

import Member from './Member'

// sebelum dipake view nya harus diimport dulu
// cara set dengan kata kunci key<nama>
import { mapGetters, mapActions } from 'vuex'

export default {
  // masukan property untuk data
  computed: {
    // untuk mengambil data di state melalui getters
    ...mapGetters([
      'members'
    ])
  },
  methods: {
    ...mapActions([
      // manggil fungsi showmember
      'showMember'
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
