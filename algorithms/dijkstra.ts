import { NodeObject } from "@/types/NodeObject"

import { getAllNodes, sortNodesByDistance, updateUnvisitedNeighbors, getNodesInShortestPathOrdered } from "./helpers"

export const dijkstra = (
    /* Dijkstra algorithm function */
    grid: Array<Array<NodeObject>>,
    startNode: NodeObject,
    endNode: NodeObject
) => {
    /* Defining a array of nodeobjects of visited and unvisited nodes.*/
    const visitedNodesOrdered: Array<NodeObject | undefined> = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    while (unvisitedNodes.length != 0){
         sortNodesByDistance(unvisitedNodes);
         const currentNode = unvisitedNodes.shift();
         /* Exit if the currentNode is a wall or if the distance of the currentNode is infinite*/
         if (currentNode!.isWall) continue;
         if (currentNode!.distance === Infinity) {
            return {
                visitedNodesOrdered: visitedNodesOrdered,
                getNodesInShortestPathOrdered: getNodesInShortestPathOrdered(endNode),
            }
         }
         /* Setting the current node to visited */
         currentNode!.isVisited = true;
         visitedNodesOrdered.push(currentNode);
         /* Exit the loop if the currentnode is the endnode*/
         if (currentNode === endNode) {
             return {
                visitedNodesOrdered: visitedNodesOrdered,
                getNodesInShortestPathOrdered: getNodesInShortestPathOrdered(endNode),
             }
         }
         updateUnvisitedNeighbors(currentNode!, grid);        
    }
    return {
        visitedNodesOrdered: visitedNodesInOrder,
        getNodesInShortestPathOrdered: getNodesInShortestPathOrdered(endNode),

    }
}