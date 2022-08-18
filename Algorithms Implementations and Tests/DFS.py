#The time complexity of the Depth-First Search algorithm is represented within the sort of O(V + E),
#where V is that the number of nodes and E is that the number of edges.
#The space complexity of the algorithm is O(V).

visited = set() # Set to keep track of visited nodes of graph.
ret_arr = []

def dfs(visited, graph, node):
    if node not in visited:
        ret_arr.append(node)
        visited.add(node)
        for neighbour in graph[node]:
            dfs(visited, graph, neighbour)
    return ret_arr

