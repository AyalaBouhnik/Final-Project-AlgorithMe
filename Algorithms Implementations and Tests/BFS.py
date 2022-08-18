visited = [] # List for visited nodes.
queue = []     #Initialize a queue
ret_arr = []

def bfs(visited, graph, node): #function for BFS
  ret_arr.clear()
  visited.append(node)
  queue.append(node)

  while queue:          # Creating loop to visit each node
    m = queue.pop(0)
    ret_arr.append(m)
    #print (m, end = " ")

    for neighbour in graph[m]:
      if neighbour not in visited:
        visited.append(neighbour)
        queue.append(neighbour)
  return ret_arr
