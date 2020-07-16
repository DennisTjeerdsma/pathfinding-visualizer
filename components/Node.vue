<template>
  <td :id="`node - ${row} - ${col}`" class="node" :class="start ? 'start': '' " />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Node extends Vue {
  @Prop({ required: true, type: Boolean, default: false })
  readonly isStart!: boolean
  @Prop({ required: true, type: Number }) readonly row!: number
  @Prop({ required: true, type: Number }) readonly col!: number

  private start: boolean = this.isStart
}
</script>

<style>
.node {
  border: 1px solid rgba(41, 73, 255, 0.1);
  text-align: center;
  flex: 1 0 auto;
  height: 25px;
  width: 25px;

  &:node-start {
    background-color: rgba(255, 0, 0);
  }
}

.start {
  background-color: aqua;
}
</style>