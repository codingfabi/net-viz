export function getNodes(config: any){
    const nodes = config["nodes"].map((jsonNode) => {
        return {
            id: jsonNode.id,
            type: 'ScreenComponent', 
            data: {
                type: jsonNode.type,
                ...jsonNode.attributes
            },
            position:  {
                x: jsonNode.position.x * 50,
                y: jsonNode.position.y * 35 
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