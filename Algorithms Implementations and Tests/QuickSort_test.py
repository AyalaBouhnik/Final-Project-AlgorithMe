import unittest
from QuickSort import quicksort

class QuickSort_test(unittest.TestCase):
    def test_QuickSort(self):
        example = [4, 5, 1, 2, 3]
        result = [1, 2, 3, 4, 5]
        self.assertEqual(quicksort(0, len(example)-1, example) , result)

        example = [2, 5, 6, 1, 4, 6, 2, 4, 7, 8]
        result = [1, 2, 2, 4, 4, 5, 6, 6, 7, 8]
        self.assertEqual(quicksort(0, len(example)-1, example) , result)

        example = [2,2]
        result = [2, 2]
        self.assertEqual(quicksort(0, len(example)-1, example) , result)

        example = [9,8,7,6,5,4,3,2,1]
        result = [1,2,3,4,5,6,7,8,9]
        self.assertEqual(quicksort(0, len(example)-1, example) , result)

        example = [9,9,8,7,6,5,4,3,2,1]
        result = [1,2,3,4,5,6,7,8,9,9]
        self.assertEqual(quicksort(0, len(example)-1, example) , result)

        example = [10,10000,100000, 1000, 100]
        result = [10,100,1000,10000,100000]
        self.assertEqual(quicksort(0, len(example)-1, example) , result)

        example = [1,2,3,4,5,6,7,8,9]
        result = [1,2,3,4,5,6,7,8,9]
        self.assertEqual(quicksort(0, len(example)-1, example) , result)

        example = [1,2,3,4,5,6,7,8,9,0]
        result = [0,1,2,3,4,5,6,7,8,9]
        self.assertEqual(quicksort(0, len(example)-1, example) , result)

        example = [1]
        result = [1]
        self.assertEqual(quicksort(0, len(example)-1, example) , result)

if __name__ == '__main__':
    unittest.main()