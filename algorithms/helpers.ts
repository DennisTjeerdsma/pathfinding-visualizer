import { NodeObject } from "@/types/NodeObject"

export const getAllNodes = (
    grid: Array<Array<NodeObject>>
): Array<NodeObject> => {
    const nodesArray = [];
    for (const row of grid) for (const node of row) nodesArray.push(node);
    return nodesArray
}

export const sortNodesByDistance = (
    unvisitedNodes: Array<NodeObject>;
): void => {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}
