import unittest
from LCS import lcs

class LCS_arrays_test(unittest.TestCase):
    
    def test_reg_cases(self):
        self.assertEqual(lcs("AGGTAB" ,"GXTXAYB"), 4)
        self.assertEqual(lcs("AGGTA" ,"GXTXAYB"), 3)
        self.assertEqual(lcs("AGGT" ,"GXTXAYB"),  2)
        self.assertEqual(lcs("AGTAB" ,"GXTXAYB"), 4)
        self.assertEqual(lcs("ATABAAA" ,"GXTXAYB"), 3)
        self.assertEqual(lcs("AGGTAB", "GXTXAYBAAA"), 4)
        self.assertEqual(lcs("AGGTAAAA", "GXTXAYBBAAA"), 6)
        self.assertEqual(lcs("ASASASAGGT", "GXTXAYB"), 2)
        self.assertEqual(lcs("AGTABBB", "GXTXAYB"), 4)
        self.assertEqual(lcs("ATABB", "GXTXAYBB"), 4)
        self.assertEqual(lcs("AGAGTAB", "GXTXAYB"), 4)
        self.assertEqual(lcs("HI", "GXTXAYB"), 0)

    def test_same_string_cases(self):
        self.assertEqual(lcs("GXTXAYB" ,"GXTXAYB"), 7)
        self.assertEqual(lcs("AGGTA" ,"AGGTA"), 5)
        self.assertEqual(lcs("SAS" ,"SAS"), 3)
        self.assertEqual(lcs("BUYI" ,"BUYI"), 4)

    def test_same_latter_cases(self):
        self.assertEqual(lcs("AAA" ,"AAA"), 3)
        self.assertEqual(lcs("AAW" ,"AB"), 1)
        self.assertEqual(lcs("FOO" ,"OOF"), 2)
        self.assertEqual(lcs("WHOSSS" ,"WSAS"), 3)
        self.assertEqual(lcs("ABABABA" ,"AAA"), 3)
        self.assertEqual(lcs("ABABABA" ,"ABBA"), 4)
        self.assertEqual(lcs("ABABABA" ,"BBBBAAAA"), 4)

    def test_emapty_string_cases(self):
        self.assertEqual(lcs("" ,""), 0)
        self.assertEqual(lcs("AAW" ,""), 0)
        self.assertEqual(lcs("" ,"OOF"), 0)
        self.assertEqual(lcs("WHOSS" ,""), 0)

    def test_inversion_word_cases(self):
        self.assertEqual(lcs("OOPS" ,"SPOO"), 2)
        self.assertEqual(lcs("WHAT", "TAHW"), 1)
        self.assertEqual(lcs("SOME", "EMOS"), 1)
        self.assertEqual(lcs("WHERE", "EREHW"), 3)
        self.assertEqual(lcs("SOMEONE", "ENOEMOS"), 3)
        self.assertEqual(lcs("WHY", "YHW"), 1)
        self.assertEqual(lcs("ABBYA", "AYBBA"), 4)

    def test_reg_cases(self):
        self.assertEqual(lcs([4, 1, 3, 2, 1, 3, 3, 1], [3, 4, 1, 1, 2, 4, 2, 1, 0, 4, 1]) , 5)
        self.assertEqual(lcs([0, 2, 2, 3], [3, 0, 0, 4]) , 1)
        self.assertEqual(lcs([3, 3, 4, 4, 0, 4], [4, 4, 4, 3, 2, 3, 0, 0, 2, 0, 4]) , 4)
        self.assertEqual(lcs([4, 2, 1, 4, 3, 0, 2, 2, 4, 2, 2, 1], [4, 3, 4, 2, 2, 1, 4, 4, 3, 1]) , 6)
        self.assertEqual(lcs([1, 4, 3, 3, 1, 4], [4, 3, 3, 2, 4, 1, 3, 1, 4, 4]) , 5)
        self.assertEqual(lcs([2, 1, 0, 4, 3, 4, 3], [3, 4, 0, 4]) , 2)
        self.assertEqual(lcs([4, 3, 0, 2, 1, 3, 0], [3, 1, 0, 4]) , 3)
        self.assertEqual(lcs([4, 2, 0, 1, 4, 0, 2, 4], [1, 3, 0, 2]) , 3)
        self.assertEqual(lcs([1, 0, 3, 3, 3, 1, 1, 1, 4, 0, 3, 4], [3, 2, 0, 4, 2, 1, 4, 0, 3, 3, 2, 0]) , 5)
        self.assertEqual(lcs([4, 4, 3, 2, 4, 1, 1, 1, 2, 1], [1, 0, 2, 1, 1, 0, 4, 3, 2, 2]) , 4)
        self.assertEqual(lcs([3,1,1,4,1,4], [1,1,1,1,3,4,2]) , 4)
        self.assertEqual(lcs([1,4,3,1,2,1], [1,2,3,2,4,1,2]) , 4)
        self.assertEqual(lcs([1,2], [1,2]) , 2)
        self.assertEqual(lcs([1], [1]) , 1)
        self.assertEqual(lcs([1,4,3,1,2,1], [10,20,30,28,49,18,20]) , 0)
        self.assertEqual(lcs([10,20,30,28,49,18,20], [10,20,30,28,49,18,20]) , 7)
        self.assertEqual(lcs([1,4,3,18,28,18], [1,4,3,1,2,1]) , 3)
        self.assertEqual(lcs([1,4,3,1,2,1], [10,20,30,28,49,18,4]) , 1)
        self.assertEqual(lcs([1,4,3,1,2,1], [1,20,30,28,49,18,1]) , 2)
        self.assertEqual(lcs([1,4,3,1,2], [10,1,20,30,4,28,49,3,18,1,20,2]) , 5)

if __name__ == '__main__':
    unittest.main()