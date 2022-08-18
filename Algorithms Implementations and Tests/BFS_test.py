import unittest
from BFS import bfs

class BFS_test(unittest.TestCase):
    def test_BFS_graph1(self):
        visited = []
        graph1 = {
            '5': ['3', '7'],
            '3': ['2', '4'],
            '7': ['8'],
            '2': [],
            '4': ['8'],
            '8': []
        }
        self.assertEqual(bfs(visited, graph1, '5') , ['5', '3', '7', '2', '4', '8'])

    def test_BFS2_graph2(self):
        visited = []
        graph2 = {
            '1': ['2', '3'],
            '2': ['4', '5'],
            '3': ['6'],
            '4': [],
            '5': ['6'],
            '6': []
        }
        self.assertEqual(bfs(visited, graph2, '1') , ['1', '2', '3', '4', '5', '6'])

    def test_BFS_graph3(self):
        visited = []
        graph3 = {
            '0': ['1', '2'],
            '1': ['2'],
            '2': ['0' , '3'],
            '3': ['3'],
        }
        self.assertEqual(bfs(visited, graph3, '2') , ['2', '0', '3', '1'])

    def test_BFS_graph4(self):
        visited = []
        graph4 = {
            '0': ['0']
        }
        self.assertEqual(bfs(visited, graph4, '0') , ['0'])

    def test_BFS_graph5(self):
        visited = []
        graph5 = {
            '0': ['1', '2'],
            '1': ['2'],
            '2': ['3'],
            '3': ['1' , '2'],
        }
        self.assertEqual(bfs(visited, graph5, '0') , ['0' , '1' , '2' , '3'])


if __name__ == '__main__':
    unittest.main()