<template>
  <div name="app" class="bg-grey-300 antialiased">
    <!-- Navigation bar item at the top of the page -->
    <navbar class="navbar h-20 bg-midnightgreen-600 w-full">
      <p>Placeholder navbar</p>
    </navbar>
    <!-- Visualizer --->
    <Visualizer class="flex w-full justify-center pt-4" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Visualizer from '@/components/Visualizer.vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.navbar {
  min-height: 12px;
  display: flex;
  justify-content: between;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 48px;
  letter-spacing: 1px;
  color: white;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
