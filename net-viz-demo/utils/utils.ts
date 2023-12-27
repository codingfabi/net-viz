export function getNodes(config: any){
    const nodes = config["nodes"].map((jsonNode) => {
        return {
            id: jsonNode.id, 
            data: {
                type: jsonNode.type,
                ...jsonNode.attributes
            },
            position:  {
                x: jsonNode.position.x,
                y: jsonNode.position.y 
            }
        }
    })
    return nodes;
}

export function getEdges(config: any){
    const edges = config["edges"].map((jsonEdge) => {
        return {
            id: `${jsonEdge.source}-${jsonEdge.target}`,
            source: `${jsonEdge.source}`,
            target: `${jsonEdge.target}`
        }
    })
    return edges;
}