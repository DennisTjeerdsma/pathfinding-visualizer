export type NodeObject = {
  col: number
  row: number
  isStart: boolean
  isEnd: boolean
  distance: number
  isVisited: boolean
  isWall: boolean
  previousNode: NodeObject
}
