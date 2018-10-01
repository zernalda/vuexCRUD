

<template>
 <!-- membuat component member untuk dibuat berulang-ulang -->
    <div class="members" >
      <h3> {{ member.name }} - {{member.goal}} Goals</h3>
      <img :src="'/static/images/' +  member.img " width="200" height="300">
      <!-- membuat button (x) untuk digunakan hanya ketika allowRemove terpanggil -->
      <div v-if="allowRemove" @click.prevent="removeMember(member.id)">
          ( x )
      </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    props: [
            'member',
            'allowRemove'
    ],
    methods: {
        ...mapActions([
            'removeMember'
        ])
    }
}
</script>
