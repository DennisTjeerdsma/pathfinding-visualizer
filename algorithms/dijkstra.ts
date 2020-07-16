import { NodeObject } from "@/types/NodeObject"

import getAllNodes, sortNodesByDistance from "@/algorithms/helpers.ts"

export const dijkstra = (
    grid: Array<Array<NodeObject>>,
    startNode: NodeObject,
    endNode: NodeObject
) => {
    const visitedNodesOrdered: Array<NodeObject | undefined> = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    while (unvisitedNodes.length != 0){
         sortNodesByDistance(unvisitedNodes);
         const closestNode = unvisitedNodes.shift();
         if (closestNode!.isWall) continue;
         if (closestNode!.distance === Infinity) {

         }
         closestNode!.isVisited = true;
         visitedNodesOrdered.push(closestNode);
         if (closestNode === endNode) {
             return {
                 visitedNodesOrdered: visitedNodesOrdered,
                 nodes
             }
         }        
    }
}