class Solution:
    def isValid(self, string: str) -> bool:

        if len(string) <= 1:
            return False

        open_dict = {
            "[": "]",
            "(": ")",
            "{": "}",
        }

        stack = []

        for s in string:
            if s in open_dict:
                stack.append(open_dict[s])
            elif len(stack) > 0 and s == stack[-1]:
                stack.pop()
                continue
            else:
                return False

        if len(stack) == 0:
            return True
        else:
            return False