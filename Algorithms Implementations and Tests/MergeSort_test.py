import unittest
from MergeSort import merge
from MergeSort import mergeSort

class MergeSort_test(unittest.TestCase):
    def test_MergeSort(self):
        arr = [12, 11, 13, 5, 6, 7]
        result = [5, 6, 7, 11, 12, 13]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)

        arr = [4, 5, 1, 2, 3]
        result = [1, 2, 3, 4, 5]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)

        arr = [2, 5, 6, 1, 4, 6, 2, 4, 7, 8]
        result = [1, 2, 2, 4, 4, 5, 6, 6, 7, 8]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)

        arr = [2, 2]
        result = [2, 2]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)

        arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
        result = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)

        arr = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)

        arr = [10, 10000, 100000, 1000, 100]
        result = [10, 100, 1000, 10000, 100000]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)

        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        result = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)

        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)

        arr = [1]
        result = [1]
        n = len(arr)
        self.assertEqual(mergeSort(arr, 0, n - 1) , result)


if __name__ == '__main__':
    unittest.main()