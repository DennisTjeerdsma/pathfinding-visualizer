import { NodeObject } from "@/types/NodeObject"

/* Helper function returning 1d array of nodes*/
export const getAllNodes = (
    grid: Array<Array<NodeObject>>
): Array<NodeObject> => {
    const nodesArray = [];
    for (const row of grid) for (const node of row) nodesArray.push(node);
    return nodesArray
}

export const sortNodesByDistance = (
    unvisitedNodes: Array<NodeObject>
): void => {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

export const getNeighbors = (
    node: NodeObject,
    grid: Array<Array<NodeObject>>
): Array<NodeObject> => {
    const neighbors = [];
    const {col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col])
    if (row < grid.length - 1) neighbors.push(grid[row+1][col])
    if (col > 0) neighbors.push(grid[row][col-1])
    if (col < grid[0].length - 1) neighbors.push(grid[row][col+1])
    return neighbors
}

const getUnvisitedNeighbors = (
    node: NodeObject,
    grid: Array<Array<NodeObject>>
): Array<NodeObject> => {
    const neighbors = getNeighbors(node, grid);
    return neighbors.filter((neighbor) => !neighbor.isVisited)
}

export const updateUnvisitedNeighbors = (
    node: NodeObject,
    grid: Array<Array<NodeObject>>
): void => {
    const univistedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of univistedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}

/* Function returning the nodes in the shortest path from start node to finish*/
export const getNodesInShortestPathOrdered = (
    node: NodeObject,
): Array<NodeObject> => {
    const nodesInShortestPath = [];
    let currentNode = node;
    /* Traverses through the pointers through the previous nodes in order to find the shortest path*/
    while(currentNode!) {
        nodesInShortestPath.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPath;
}