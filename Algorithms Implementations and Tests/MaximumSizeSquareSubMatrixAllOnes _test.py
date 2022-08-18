import unittest
from MaximumSizeSquareSubMatrixAllOnes import *

class MaximumSizeSquareSubMatrixAllOnes_test(unittest.TestCase):
    def test_MaximumSizeSquareSubMatrixAllOnes(self):
        M = [[0, 1, 1, 0, 1],
             [1, 1, 0, 1, 0],
             [0, 1, 1, 1, 0],
             [1, 1, 1, 1, 0],
             [1, 1, 1, 1, 1],
             [0, 0, 0, 0, 0]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 9)

        M = [[0, 1, 1, 0, 1],
             [1, 1, 0, 1, 0],
             [0, 1, 1, 1, 0],
             [1, 1, 1, 1, 0],
             [1, 1, 1, 1, 1],
             [0, 0, 0, 0, 0]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 9)

        M = [[0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 0)

        M = [[0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0],
             [0, 0, 0, 1, 0],
             [0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0],
             [1, 0, 0, 0, 0]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 1)

        M = [[0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0],
             [0, 0, 1, 1, 0],
             [0, 0, 1, 1, 0],
             [0, 0, 0, 0, 0],
             [1, 0, 0, 0, 0]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 4)

        M = [[1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 25)

        M = [[1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1],
             [0, 0, 0, 0, 0],
             [1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 9)

        M = [[1, 1, 1, 1, 1],
             [0, 0, 1, 0, 1],
             [1, 1, 1, 1, 1],
             [0, 0, 0, 0, 0],
             [1, 1, 1, 1, 1],
             [1, 1, 1, 1, 1]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 4)

        M = [[1, 1, 1, 1, 1],
             [0, 0, 1, 0, 1],
             [1, 1, 1, 1, 1],
             [0, 0, 0, 0, 0],
             [0, 1, 1, 1, 1],
             [1, 1, 0, 0, 1]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 1)

        M = [[1, 1, 1, 1, 1],
             [0, 0, 1, 1, 1],
             [1, 1, 1, 1, 1],
             [0, 0, 0, 0, 0],
             [0, 1, 1, 1, 1],
             [1, 1, 0, 0, 1]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 9)

        M = [[1, 1, 1, 1, 1],
             [0, 0, 1, 0, 1],
             [1, 1, 1, 1, 1],
             [0, 0, 0, 0, 0],
             [0, 1, 1, 1, 1],
             [1, 1, 0, 0, 1]]
        self.assertEqual(MaximumSizeSquareSubMatrixAllOnes(M) , 1)


if __name__ == '__main__':
    unittest.main()