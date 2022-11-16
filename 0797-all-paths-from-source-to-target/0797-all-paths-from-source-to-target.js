/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function(graph, path=[], i=0, res=[]) {
    if (i >= graph.length) return res;
    for (let node of graph[i]) {
        allPathsSourceTarget(graph, [...path, i], node, res);
    }
    
    if (i === graph.length - 1) res.push([...path,i]);
    return res;
};
