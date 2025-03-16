class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hmap = {}

        for n in nums:
            if n in hmap:
                hmap[n].append(n)
            else:
                hmap[n] = [n]

        res = list(hmap.values())
        res.sort(key=len, reverse=True)

        v = []

        for l in res:
            v.append(l[0])

        return v[:k]