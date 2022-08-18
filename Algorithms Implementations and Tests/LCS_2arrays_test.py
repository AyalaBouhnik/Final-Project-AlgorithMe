import unittest
from LCS_2arrays import LCS_2arrays

class LCS_2arrays_test(unittest.TestCase):
    def test_LCS_2arrays(self):
      firstArr = [3, 5, 1, 8]
      secondArr = [3, 3, 5, 3, 8]
      self.assertEqual(LCS_2arrays(firstArr, secondArr),3)
      firstArr1 = [1, 2,1]
      secondArr2 = [3]
      self.assertEqual(LCS_2arrays(firstArr1, secondArr2),0)
      self.assertEqual(LCS_2arrays([3,1,1,4,1,4], [1,1,1,1,3,4,2]) , 4)
      self.assertEqual(LCS_2arrays([1,4,3,1,2,1], [1,2,3,2,4,1,2]) , 4)
      self.assertEqual(LCS_2arrays([1,2], [1,2]) , 2)
      self.assertEqual(LCS_2arrays([1], [1]) , 1)
      self.assertEqual(LCS_2arrays([1,4,3,1,2,1], [10,20,30,28,49,18,20]) , 0)
      self.assertEqual(LCS_2arrays([10,20,30,28,49,18,20], [10,20,30,28,49,18,20]) , 7)
      self.assertEqual(LCS_2arrays([1,4,3,18,28,18], [1,4,3,1,2,1]) , 3)
      self.assertEqual(LCS_2arrays([1,4,3,1,2,1], [10,20,30,28,49,18,4]) , 1)
      self.assertEqual(LCS_2arrays([1,4,3,1,2], [1,20,30,28,49,18,1]) , 2)
      self.assertEqual(LCS_2arrays([1,4,3,1,2,1], [10,1,20,30,4,28,49,3,18,1,20,2]) , 5)
      self.assertEqual(LCS_2arrays([4, 1, 3, 2, 1, 3, 3, 1], [3, 4, 1, 1, 2, 4, 2, 1, 0, 4, 1]) , 5)
      self.assertEqual(LCS_2arrays([1,4,3,1,2,1], [1,20,30,28,49,18,1]) , 2)
      self.assertEqual(LCS_2arrays([0, 2, 2, 3], [3, 0, 0, 4]) , 1)
      self.assertEqual(LCS_2arrays([3, 3, 4, 4, 0, 4], [4, 4, 4, 3, 2, 3, 0, 0, 2, 0, 4]) , 4)
      self.assertEqual(LCS_2arrays([4, 2, 1, 4, 3, 0, 2, 2, 4, 2, 2, 1], [4, 3, 4, 2, 2, 1, 4, 4, 3, 1]) , 6)
      self.assertEqual(LCS_2arrays([1, 4, 3, 3, 1, 4], [4, 3, 3, 2, 4, 1, 3, 1, 4, 4]) , 5)
      self.assertEqual(LCS_2arrays([2, 1, 0, 4, 3, 4, 3], [3, 4, 0, 4]) , 2)
      self.assertEqual(LCS_2arrays([4, 3, 0, 2, 1, 3, 0], [3, 1, 0, 4]) , 3)
      self.assertEqual(LCS_2arrays([4, 2, 0, 1, 4, 0, 2, 4], [1, 3, 0, 2]) , 3)
      self.assertEqual(LCS_2arrays([2, 1, 0, 4, 3, 4, 3], [3, 4, 0, 4]) , 2)
      self.assertEqual(LCS_2arrays([1, 0, 3, 3, 3, 1, 1, 1, 4, 0, 3, 4], [3, 2, 0, 4, 2, 1, 4, 0, 3, 3, 2, 0]) , 5)
      self.assertEqual(LCS_2arrays([4, 4, 3, 2, 4, 1, 1, 1, 2, 1], [1, 0, 2, 1, 1, 0, 4, 3, 2, 2]) , 4)

if __name__ == '__main__':
    unittest.main()