# take arr1 and convert to set. Take arr2 and convert to set. If the len() of both arrays do not match, we have a dupe and return true, else return false

class Solution:
    def hasDuplicate(self, nums) -> bool:
        my_set = set(nums)
        
        if len(my_set) != len(nums):
            return True
        else:
            return False