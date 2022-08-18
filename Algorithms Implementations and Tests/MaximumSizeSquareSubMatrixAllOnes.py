# Python code for Maximum size square
# sub-matrix with all 1s
# (space optimized solution)

#Time Complexity: O(m*n) where m is the number of rows and n is the number of columns in the given matrix.
# Auxiliary space: O(n) where n is the number of columns in the given matrix.
R = 6
C = 5


def MaximumSizeSquareSubMatrixAllOnes(M):
    global R, C
    Max = 0
    ret_val = 0

    # set all elements of S to 0 first
    S = [[0 for col in range(C)] for row in range(2)]

    # Construct the entries
    for i in range(R):
        for j in range(C):

            # Compute the entrie at the current position
            Entrie = M[i][j]
            if (Entrie):
                if (j):
                    Entrie = 1 + min(S[1][j - 1], min(S[0][j - 1], S[1][j]))

            # Save the last entrie and add the new one
            S[0][j] = S[1][j]
            S[1][j] = Entrie

            # Keep track of the max square length
            Max = max(Max, Entrie)

    # Print the square
    for i in range(Max):
        for j in range(Max):
            ret_val = ret_val +1
    return ret_val

# This code is based on shinjanpatra code
