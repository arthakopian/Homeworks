/*create tree1 and tree2 from nodes (function, which will take argument nodes and returns the tree1/tree2)

nodes = [
    {id: 1, parentId: null},
    {id: 2, parentId: 1},
    {id: 3, parentId: 1},
    {id: 4, parentId: 2},
    {id: 5, parentId: 2},
    {id: 6, parentId: 3},
    {id: 7, parentId: 4},
    {id: 8, parentId: 7},
    {id: 9, parentId: 8},
] */
// 1.First tree.
function findNode(tree, parentId) {
    if (!Object.keys(tree).length) {
        return undefined
    }
    for (let key in tree) {
        if (key == parentId) {
           return tree[key]
        } else {
            const res = findNode(tree[key], parentId)
            if (res) return res
        }
    }
}
function createTree1(nodes) {
    const tree = {}
    nodes.forEach(node => {
        if (node.parentId === null) {
            tree[node.id] = {}
        } else {
            const parentId = node.parentId
            const parent = findNode(tree, parentId)
            parent[node.id] = {}
        }    
    })
    return tree
}

// 2. Second tree.
function createTree2(nodes) {
    debugger
    let tree
    nodes.forEach(node => {
        debugger
        if (node.parentId === null) {
            tree = {id : node.id, children : [],}
        } else {
            const parentId = node.parentId
            const parent = findNode(tree, parentId)
            if (parent) {
                parent.children.push({id : node.id, children : []})
            }
        }
    })
    return tree
}
function findNode(tree, parentId) {
    if (tree.id === parentId) {
        return tree
    }
    if (tree.children) {
        for (let i = 0; i < tree.children.length; i++) {
            const res = findNode(tree.children[i], parentId)
            if (res) return res
        }
    }
    return undefined
}