

<template>
 <!-- membuat component member untuk dibuat berulang-ulang -->
    <div class="members" >
        <div class="list">
            <h3> {{ member.name }} - {{member.goal}} Goals</h3>
            <!-- membuat button (x) untuk digunakan hanya ketika allowRemove terpanggil -->
            <a href="#" v-if="allowRemove" @click.prevent="removeMember(member.id)">
                (X)
            </a>
        </div>
      <div v-if="allowImg"> 
           <img :src="'/static/images/' +  member.img " width="200" height="300">
      </div>
      
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    props: [
            'member',
            'allowRemove',
            'allowImg'
    ],
    methods: {
        ...mapActions([
            'removeMember'
        ])
    }
}
</script>
