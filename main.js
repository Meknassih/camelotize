console.log("Start")

const rules = {
    "1a": ["12a", "1b", "2a"],
    "2a": ["1a", "2b", "3a"],
    "3a": ["2a", "3b", "4a"],
    "4a": ["3a", "4b", "5a"],
    "5a": ["4a", "5b", "6a"],
    "6a": ["5a", "6b", "7a"],
    "7a": ["6a", "7b", "8a"],
    "8a": ["7a", "8b", "9a"],
    "9a": ["8a", "9b", "10a"],
    "10a": ["9a", "10b", "11a"],
    "11a": ["10a", "11b", "12a"],
    "12a": ["11a", "12b", "1a"],
    "1b": ["12b", "1a", "2b"],
    "2b": ["1b", "2a", "3b"],
    "3b": ["2b", "3a", "4b"],
    "4b": ["3b", "4a", "5b"],
    "5b": ["4b", "5a", "6b"],
    "6b": ["5b", "6a", "7b"],
    "7b": ["6b", "7a", "8b"],
    "8b": ["7b", "8a", "9b"],
    "9b": ["8b", "9a", "10b"],
    "10b": ["9b", "10a", "11b"],
    "11b": ["10b", "11a", "12b"],
    "12b": ["11b", "12a", "1b"],
}

class TrackNode {
    name
    key
    canMatchWith
    visited

    constructor(name, key) {
        this.name = name
        this.key = key
        this.canMatchWith = [...rules[key]]
        this.visited = false
    }

}



const input = [{ name: "1", key: "12a" }, { name: "2", key: "4a" }, { name: "3", key: "1b" }, { name: "4", key: "1a" }, { name: "5", key: "3a" }]

function main() {
    let inputNodes = input.map((value) => {
        return new TrackNode(value.name, value.key)
    })
    console.log("input nodes", inputNodes)

    let solution, solutions = []
    let startingTrack = 0
    do {
        solution = []
        resetVisits(inputNodes)
        findNextNode(inputNodes[startingTrack], inputNodes, solution)
        solutions.push(solution)
        startingTrack++
    } while (startingTrack < inputNodes.length && solution.length < inputNodes.length)

    console.log("=== SOLUTIONS ===")
    for (let solution of solutions)
        console.table(solution)
    return 0
}

function findNextNode(currentTrack, allNodes, solution) {
    currentTrack.visited = true
    solution.push(currentTrack)
    for (let nextTrack of allNodes) {
        if (nextTrack.visited) continue
        if (currentTrack.canMatchWith.indexOf(nextTrack.key) >= 0) {
            findNextNode(nextTrack, allNodes, solution)
            break;
        }
    }
}

function resetVisits(nodes, value = false) {
    for (let node of nodes)
        node.visited = value
}

main()