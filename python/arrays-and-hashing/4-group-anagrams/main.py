class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_groups = {}
        
        for s in strs:
            # Create a sorted string of the characters in the current string
            sorted_s = "".join(sorted(s))
            
            # If the sorted string is already in the anagram groups, append the current string to the list
            # Otherwise, create a new list with the current string
            if sorted_s in anagram_groups:
                anagram_groups[sorted_s].append(s)
            else:
                anagram_groups[sorted_s] = [s]
        
        # Return the values of the anagram groups as a list of lists
        return list(anagram_groups.values())