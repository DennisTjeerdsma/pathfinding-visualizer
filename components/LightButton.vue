<template>
  <div name="lightbutton">
    <button
      class="rounded bg-white border border-midnightgreen-200 text-midnightgreen-200 py-2 px-4 w-24 block inline-block hover:bg-midnightgreen-200 font-bold hover:text-white mx-2"
    >
      <slot>Temp</slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default class Lightbutton extends Vue {}
</script>
