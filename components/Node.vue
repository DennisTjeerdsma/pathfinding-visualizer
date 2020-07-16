<template>
  <td
    :id="`node - ${row} - ${col}`"
    class="node"
    :class="start ? 'node-start': end ? 'node-end' : '' "
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Node extends Vue {
  @Prop({ required: true, type: Boolean, default: false })
  readonly isStart!: boolean
  @Prop({ required: true, type: Number }) readonly row!: number
  @Prop({ required: true, type: Number }) readonly col!: number
  @Prop({ required: true, type: Boolean, default: false })
  readonly isEnd!: boolean
  @Prop({ required: true, type: Boolean, default: false })
  readonly isVisited!: boolean
  @Prop({ required: true, type: Boolean, default: false })
  readonly isWall!: boolean

  private start: boolean = this.isStart
  private end: boolean = this.isEnd
  private visited: boolean = this.isVisited
  private wall: boolean = this.isWall
  private row: number = this.row
  private col: number = this.col
}
</script>

<style lang="scss">
.node {
  border: 1px solid rgba(41, 73, 255, 0.1);
  text-align: center;
  flex: 1 0 auto;
  height: 25px;
  width: 25px;

  &.node-start {
    background-color: green;
  }
  &.node-end {
    background-color: red;
  }
  &.node-visited {
    background-color: blueviolet;
  }
  &.node-wall {
    background-color: black;
  }
}
</style>