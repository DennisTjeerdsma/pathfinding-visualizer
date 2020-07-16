<template>
  <div class="main">
    <tbody class="board">
      <tr v-for="(row, rowIndex) in grid" :key="rowIndex">
        <Node
          v-for="(node, nodeIndex) in row"
          :key="nodeIndex"
          :row="node.row"
          :col="node.col"
          :isStart="node.isStart"
        />
      </tr>
    </tbody>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { NodeObject } from '@/types/NodeObject'
import Node from '@/components/Node.vue'

@Component({
  components: {
    Node,
  },
})
export default class Grid extends Vue {
  @Prop({ required: true }) row!: number
  @Prop({ required: true }) column!: number
  @Prop({ required: true }) grid!: Array<Array<NodeObject>>

  private r: number = this.row
  private c: number = this.column
}
</script>