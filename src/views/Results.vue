<template>
  <div class="search-results">
   
    <app-header></app-header>
    <BoxResult> </BoxResult>
  </div>
</template>

<script>
// @ is an alias to /src
import BoxResult from '@/components/BoxResult.vue'

export default {
  name: 'results',
  components: {
    BoxResult
  }
}
</script>
