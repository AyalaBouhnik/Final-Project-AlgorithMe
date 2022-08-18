import unittest
from LIS import lis

class LIS_test(unittest.TestCase):
    def test_reg_cases(self):
        self.assertEqual(lis([10, 22, 9, 33, 21, 50, 41, 60]) , 5)
        self.assertEqual(lis([10, 22, 9, 33, 21, 50, 41]) , 4)
        self.assertEqual(lis([10, 22, 33, 21, 50, 41, 60]) , 5)
        self.assertEqual(lis([1, 2, 3, 4, 0, 50, 41, 60]) , 6)
        self.assertEqual(lis([9, 33, 21, 50, 41, 60]) , 4)
        self.assertEqual(lis([10, 22]) , 2)
        self.assertEqual(lis([10, 3]) , 1)
        self.assertEqual(lis([10, 2, 12]) , 2)
        self.assertEqual(lis([5,3,5,3]) , 2)
        self.assertEqual(lis([5,3,5,5]) , 2)
        self.assertEqual(lis([5,3,5,6]) , 3)
        self.assertEqual(lis([9]) , 1)


    def test_empty(self):
        self.assertEqual(lis([]) , 0)

    def test_same_val(self):
        self.assertEqual(lis([5,5,5,5]) , 1)
        self.assertEqual(lis([5]) , 1)
        self.assertEqual(lis([3,3]) , 1)
        self.assertEqual(lis([2,2,2,2,2,2,2,2,2]) , 1)
        self.assertEqual(lis([1,1]) , 1)
        self.assertEqual(lis([58,8,8,8,8,8,8,8,8,8]) , 1)
        self.assertEqual(lis([7,7,7,7,7]) , 1)
        self.assertEqual(lis([3,3,3,3,3]) , 1)
        self.assertEqual(lis([15,15,15,15]) , 1)



if __name__ == '__main__':
    unittest.main()