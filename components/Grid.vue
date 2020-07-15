<template>
  <div class="main">
    <tbody>
      <tr v-for="i in row" :id="'row' + '-' + 'i'" v-bind:key="i">
        <td v-for="j in column" v-bind:key="j" class="cell border border-gray-600"></td>
      </tr>
    </tbody>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Grid extends Vue {
  @Prop({ required: true }) row!: number
  @Prop({ required: true }) column!: number
}
</script>

<style>
.cell {
  width: 25px;
  height: 25px;
}
</style>