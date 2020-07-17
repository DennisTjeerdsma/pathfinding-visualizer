<template>
  <td
    :id="`node - ${row} - ${col}`"
    class="node"
    :class="isStart ? 'node-start': isEnd ?'node-end' : isVisited ? '' : 'node'"
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
    animation-name: fade;
    animation-duration: 1s;
  }

  &.node-wall {
    background-color: black;
  }
}

@keyframes fade {
  0% {
    transform: scale(0.3);
    background-color: aqua;
    border-radius: 100%;
  }
  50% {
    background-color: blue;
  }
  100% {
    transform: scale(1);
    background-color: blueviolet;
  }
}
</style>