import unittest
from LongestOfOnes import longest

class LongestOfOnes_test(unittest.TestCase):
    def test_LongestOfOnes(self):
        self.assertEqual(longest([1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1]) , 7)
        self.assertEqual(longest([0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,1, 0, 1, 1, 0, 1, 1, 1]) , 4)
        self.assertEqual(longest([0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0,0, 0]) , 2)
        self.assertEqual(longest([1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1,0, 1, 0, 0, 0, 1, 1, 1, 0]) , 5)
        self.assertEqual(longest([1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0,1, 1, 0, 1, 1, 1, 1, 0, 0]) , 7)
        self.assertEqual(longest([1, 0, 0, 1, 1, 1, 0, 0, 0, 1]) , 3)
        self.assertEqual(longest([1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0,0, 1, 1, 0, 0, 1, 1, 0]) , 3)
        self.assertEqual(longest([0, 0, 1, 1, 1]) , 3)
        self.assertEqual(longest([0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0,1, 0, 1, 1, 1, 0]) , 3)
        self.assertEqual(longest([1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1]) , 7)
        self.assertEqual(longest([0,0,0,0,0,0,0,0,0]) , 0)
        self.assertEqual(longest([1, 0, 1]) , 1)
        self.assertEqual(longest([1,0,1,1,1,0]) , 3)
        self.assertEqual(longest([1,1,1,0,0,1,1,0,1,1,1,1]) , 4)
        self.assertEqual(longest([1,1,1,1,1,1,1,1,1,1,1,1]) , 12)
        self.assertEqual(longest([1,0,1,0,0,1,0,0,1,0,1,0]) , 1)
        self.assertEqual(longest([1,1,0,1,0,1,1,1,1,1,1,1]) , 7)
        self.assertEqual(longest([1,1,1,0,0,1,1,0,1,0,1,1]) , 3)
        self.assertEqual(longest([1,1,1,1,0,1,1,1,1,0,1,1,1,1]) , 4)

if __name__ == '__main__':
    unittest.main()