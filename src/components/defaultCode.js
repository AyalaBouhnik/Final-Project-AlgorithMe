const c = `#include<stdio.h>
int main() {
    // Your Code will come here
    return 0;
}
`;
const cpp = `#include<bits/stdc++.h> \nusing namespace std;\n\nint main() {\n\t//Your Code will come here\n\treturn 0;\n}
`;

const java = `class test {
    public static void main(String args[]){
        // Your Code will come here
    }
}
`;

const python = `# Your code will come here
`;
const pythonSingtureBFS = `def bfs(visited, graph, node): #function for BFS

return ret_arr # return an array`;
const pythonSingtureDFS = `def dfs(visited, graph, node): #function for DFS

return ret_arr # return an array`;


const pythonSingtureLCS = `def lcs(X, Y): #function for LCS

return L[m][n]`;



const pythonBfs = `visited = [] # List for visited nodes.
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
`;
const pythonDfs = `#The time complexity of the Depth-First Search algorithm is represented within the sort of O(V + E),
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
`;
const pythonLcs = `#Time Complexity: O(n*m)
#Auxiliary Space: O(n*m)

# Dynamic Programming implementation of LCS problem
def lcs(X, Y):
	# find the length of the strings-
	m = len(X)
	n = len(Y)

	# declaring the array for storing the dp values
	L = [[None]*(n + 1) for i in range(m + 1)]

	"""Following steps build L[m + 1][n + 1] in bottom up fashion
	Note: L[i][j] contains length of LCS of X[0..i-1]
	and Y[0..j-1]"""
	for i in range(m + 1):
		for j in range(n + 1):
			if i == 0 or j == 0 :
				L[i][j] = 0
			elif X[i-1] == Y[j-1]:
				L[i][j] = L[i-1][j-1]+1
			else:
				L[i][j] = max(L[i-1][j], L[i][j-1])

	# L[m][n] contains the length of LCS of X[0..n-1] & Y[0..m-1]
	return L[m][n]

`;
const pythonLis = `# Dynamic programming Python implementation of LIS problem

# lis returns length of the longest increasing subsequence
# in arr of size n
def lis(arr):
	n = len(arr)

	# Declare the list (array) for LIS and initialize LIS
	# values for all indexes
	lis = [1]*n

	# Compute optimized LIS values in bottom up manner
	for i in range (1, n):
		for j in range(0, i):
			if arr[i] > arr[j] and lis[i]< lis[j] + 1 :
				lis[i] = lis[j]+1

	# Initialize maximum to 0 to get the maximum of all
	# LIS
	maximum = 0

	# Pick maximum of all LIS values
	for i in range(n):
		maximum = max(maximum, lis[i])

	return maximum
`;

const pythonBubbleSort = `#Time Complexity:  O(n2).
#Auxiliary Space: O(1).

def BubbleSort(array):
    # loop to access each array element
    for i in range(len(array)):

        # loop to compare array elements
        for j in range(0, len(array) - i - 1):

            # compare two adjacent elements
            # change > to < to sort in descending order
            if array[j] > array[j + 1]:
                # swapping elements if elements
                # are not in the intended order
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
    return `;
const pythonCountingSort = `def CountingSort(arr):
	size = len(arr)
	output = [0] * size

	# count array initialization
	count = [0] * 10

	# storing the count of each element
	for m in range(0, size):
		count[arr[m]] += 1

	# storing the cumulative count
	for m in range(1, 10):
		count[m] += count[m - 1]

	# place the elements in output array after finding the index of each element of original array in count array
	m = size - 1
	while m >= 0:
		output[count[arr[m]] - 1] = arr[m]
		count[arr[m]] -= 1
		m -= 1

	for m in range(0, size):
		arr[m] = output[m]
	return `;


export const code = {
  c,
  cpp,
  java,
  python,
  pythonBfs,
  pythonDfs,
  pythonLcs,
  pythonLis,
  pythonBubbleSort,
  pythonCountingSort,
  pythonSingtureBFS,
  pythonSingtureDFS,
  pythonSingtureLCS,
};



