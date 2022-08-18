import unittest
from DFS import *

class DFS_test(unittest.TestCase):

    def test_graph1(self):
        graph1 = {
            5: [3, 7],
            3: [2, 4],
            7: [8],
            2: [],
            4: [8],
            8: []
        }
        visited = set()  # Set to keep track of visited nodes of graph.
        expected = [5, 3, 2, 4, 8, 7]
        self.assertEqual(dfs(visited, graph1, 5) , expected)

    def test_graph2(self):
        graph2 = {
            0: [1, 2],
            1: [2],
            2: [0, 3],
            3: [3],
        }
        ret_arr.clear()
        visited = set()
        expected = [2, 0, 1, 3]
        self.assertEqual(dfs(visited, graph2, 2) , expected)


    def test_graph3(self):
        graph3 = {
            0: [1, 2],
            1: [3, 4],
            2: [5],
            3: [],
            4: [5],
            5: []
        }
        ret_arr.clear()
        visited = set()
        expected = [0, 1, 3, 4, 5, 2]
        self.assertEqual(dfs(visited, graph3, 0) , expected)

    def test_graph4(self):
        graph4 = {
            1: [2, 3],
            2: [1, 4 ,5],
            3: [1, 6, 7],
            4: [2,8,9],
            5: [2, 10, 11],
            6: [3, 12, 13],
            7: [3],
            8: [4],
            9: [4],
            10: [5],
            11: [5],
            12: [6],
            13: [6]
        }
        ret_arr.clear()
        visited = set()
        expected = [1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7]
        self.assertEqual(dfs(visited, graph4, 1), expected)

    def test_graph5(self):
        graph5 = {
            1: [5, 9],
            5: [2, 4],
            9: [8],
            2: [4],
            4: [2],
            8: []
        }
        ret_arr.clear()
        visited = set()
        expected = [1, 5, 2, 4, 9, 8]
        self.assertEqual(dfs(visited, graph5, 1) , expected)

    def test_graph6(self):
        graph6 = {
            'A': ['B', 'S'],
            'B': ['A'],
            'C': ['D', 'E', 'F', 'S'],
            'D': ['C'],
            'E': ['C', 'H'],
            'F': ['C', 'G'],
            'G': ['F', 'S'],
            'H': ['E', 'G'],
            'S': ['A', 'C', 'G']
        }
        ret_arr.clear()
        visited = set()
        expected = ['A', 'B', 'S', 'C', 'D', 'E', 'H', 'G', 'F']
        self.assertEqual(dfs(visited, graph6, 'A') , expected)

if __name__ == '__main__':
    unittest.main()