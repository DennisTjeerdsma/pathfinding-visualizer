<template>
  <div>
    <div id="example-1">
      <button v-on:click="visualizeDijkstra()">Dijkstra</button>
    </div>
    <div class="board">
      <grid :row="15" :column="50" :grid="this.grid" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { NodeObject } from '@/types/NodeObject'
import Grid from '@/components/Grid.vue'
import Node from '@/components/Node.vue'
import { dijkstra } from '@/algorithms/dijkstra.ts'

@Component({
  components: {
    Grid,
    Node,
  },
})
export default class Visualizer extends Vue {
  private grid: Array<Array<NodeObject>> = []
  private startNodeRow = 9
  private startNodeCol = 10
  private endNodeRow = 9
  private endNodeCol = 40
  private numRows = 20
  private numColumns = 50

  mounted() {
    this.grid = this.generateGrid()
  }

  public generateGrid(): Array<Array<NodeObject>> {
    const grid = []
    for (let row = 0; row < 20; row++) {
      const currentRow = []
      for (let col = 0; col < 50; col++) {
        currentRow.push(this.createNode(col, row))
      }
      grid.push(currentRow)
    }
    return grid
  }

  public createNode(col: number, row: number): NodeObject {
    return {
      col,
      row,
      isStart: row === this.startNodeRow && col === this.startNodeCol,
      isEnd: row === this.endNodeRow && col === this.endNodeCol,
      distance: Infinity,
      isVisited: false,
      isWall: false,
    }
  }

  public visualizeDijkstra(): void {
    const grid = this.grid
    const startNode = grid[this.startNodeRow][this.startNodeCol]
    const endNode = grid[this.endNodeRow][this.endNodeCol]
    const { visitedNodesInOrder, nodesInShortestPath } = dijkstra(
      grid,
      startNode,
      endNode
    )
  }
}
</script>

<style>
</style>