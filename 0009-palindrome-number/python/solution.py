class Solution:
    def isPalindrome(self, x: int) -> bool:
        var = str(x)
        ptr1 = 0
        ptr2 = len(var) - 1
        while ptr1 < ptr2:
            if var[ptr1] != var[ptr2]:
                return False
            ptr1 += 1
            ptr2 -= 1
            
        return True
