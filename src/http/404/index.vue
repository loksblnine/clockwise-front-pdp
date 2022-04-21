<template>
  <div class="error">
    <h2>Error 404: Page Not Found</h2>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NotFoundPage',
})
</script>

<style>
.error {
  color: red;
}
</style>
