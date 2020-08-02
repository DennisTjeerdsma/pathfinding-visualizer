<template>
  <div class="m-4">
    <div id="example-1" class="flex justify-center">
      <LightButton @click.native="visualizeDijkstra()">Dijkstra's</LightButton>
      <LightButton @click.native="clearBoard()">Clear</LightButton>
    </div>
    <div class="board flex justify-center mt-4">
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
import LightButton from '@/components/LightButton.vue'
import DropDown from '@/components/DropDown.vue'

@Component({
  components: {
    Grid,
    Node,
    LightButton,
    DropDown,
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

  public clearBoard(): void {
    this.grid = this.generateGrid()
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
      previousNode: {} as NodeObject,
    }
  }

  public visualizeDijkstra(): void {
    const grid = this.grid
    const startNode = grid[this.startNodeRow][this.startNodeCol]
    const endNode = grid[this.endNodeRow][this.endNodeCol]
    const { visitedNodesOrdered, getNodesInShortestPathOrdered } = dijkstra(
      grid,
      startNode,
      endNode
    )
    this.animateVisitedNodes(visitedNodesOrdered, getNodesInShortestPathOrdered)
  }

  public animateVisitedNodes(
    visitedNodesInOrder: Array<undefined | NodeObject>,
    nodesInShortestPathOrder: Array<undefined | NodeObject>
  ): void {
    let element
    visitedNodesInOrder.forEach((visitedNode, index) => {
      if (index === visitedNodesInOrder.length - 1) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder)
        }, 10 * index)
        return
      }
      setTimeout(() => {
        const node = visitedNode
        element = document.getElementById(`node - ${node!.row} - ${node!.col}`)
        if (
          !element!.classList.contains('node-start') &&
          !element!.classList.contains('node-finish')
        )
          element!.className = 'node node-visited'
      }, 10 * index)
    })
  }

  public animateShortestPath(
    nodesInShortestPathOrder: Array<undefined | NodeObject>
  ): void {
    let element
    nodesInShortestPathOrder.forEach((nodeInShortestPath, index) => {
      setTimeout(() => {
        element = document.getElementById(
          `node-${nodeInShortestPath!.row}-${nodeInShortestPath!.col}`
        )
        if (
          !element!.classList.contains('node-start') &&
          !element!.classList.contains('node-finish')
        )
          element!.className = 'node node-shortest-path'
        else if (element!.classList.contains('node-start'))
          element!.className = 'node node-shortest-path node-start'
        else if (element!.classList.contains('node-finish'))
          element!.className = 'node node-shortest-path node-finish'
      }, 10 * index)
    })
  }
}
</script>

<style>
</style>