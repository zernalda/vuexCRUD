
<template>
 <!-- membuat component member untuk dibuat berulang-ulang -->
    <div class="members" >
      <h3> {{ member.name }} - {{member.goal}} Goals</h3>
      <img :src="'/static/images/' +  member.img " width="200">
    </div>
</template>

<script>
export default {
    props: [
            'member'
    ]
}
</script>
