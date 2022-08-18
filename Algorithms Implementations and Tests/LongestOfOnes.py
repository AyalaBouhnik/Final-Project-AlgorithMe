import itertools, operator


def longest(arr):
        cnt, max_val = 0, 0  # running count, and max count
        for e in arr:
            cnt = cnt + 1 if e == 1 else 0  # add to or reset running count
            max_val = max(cnt, max_val)  # update max count
        return max_val
