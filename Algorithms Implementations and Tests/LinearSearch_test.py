import unittest
from LinearSearch import LinearSearch

class LinearSearch_test(unittest.TestCase):

    def test_LinearSearch(self):

        arr = [64, 34, 25, 12, 22, 11, 90]
        self.assertEqual(LinearSearch(arr, 12) , True)
        self.assertEqual(LinearSearch(arr, 91) , False)
        self.assertEqual(LinearSearch(arr, 11) , True)
        self.assertEqual(LinearSearch(arr, 122) , False)

        arr = []
        self.assertEqual(LinearSearch(arr, 12), False)
        self.assertEqual(LinearSearch(arr, 91), False)
        self.assertEqual(LinearSearch(arr, 11), False)
        self.assertEqual(LinearSearch(arr, ""), False)

        arr = [1,1,1,1]
        self.assertEqual(LinearSearch(arr, 1), True)
        self.assertEqual(LinearSearch(arr, 10), False)
        self.assertEqual(LinearSearch(arr, 11), False)
        self.assertEqual(LinearSearch(arr, ""), False)

        arr = ["Hello", "you" , "are", "awesome", "!"]
        self.assertEqual(LinearSearch(arr, 1), False)
        self.assertEqual(LinearSearch(arr, "awesome"), True)
        self.assertEqual(LinearSearch(arr, "awesomeee"), False)
        self.assertEqual(LinearSearch(arr, "!"), True)
        self.assertEqual(LinearSearch(arr, "awesome!"), False)
        self.assertEqual(LinearSearch(arr, "Hello you are awesome!"), False)


if __name__ == '__main__':
    unittest.main()