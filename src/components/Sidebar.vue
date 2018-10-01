<template>
  <div class="sidebar">
    <h2>INI SIDEBAR</h2>
    <!-- prevent untuk menghilangkan sifat behavior dari fungsi tersebut -->
    <!-- native dipakai karenan mengambil dari component -->
   <member v-for="member in members" :member="member" :allowRemove="true" @click.native.prevent="showMember(member)"></member>
   <div id="actions">
     <!-- untuk menampilkan kembali semua list -->
     <a href="#" @click.prevent="showMembers()">ALl Player!</a>
     <br>
     <a href="#" @click.prevent="addMember()">Add Player!</a>
   </div>
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
      'showMember',
      'showMembers',
      'addMember'
    ])
  },
  components: {
      Member
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #actions {
    padding-bottom: 5%;
  }

  #actions a {
    display: block;
  }

  .sidebar {
      height: 98%; /* Full-height: remove this if you want "auto" height */
      width: 300px; /* Set the width of the sidebar */
      position: fixed; /* Fixed Sidebar (stay in place on scroll) */
      z-index: 1; /* Stay on top */
      top: 0; /* Stay at the top */
      left: 0;
      background-color:darkgray; /* Black */
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 20px;
  }

  .sidebar {
    flex: 1;
  }

</style>
