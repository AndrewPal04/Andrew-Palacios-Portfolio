class Solution:
    def largestInteger(self, nums: list[int], k: int) -> int:
        n = len(nums)
        count = {}
        for i in range(n - k + 1):
            for v in set(nums[i:i + k]):
                count[v] = count.get(v, 0) + 1

        candidates = [v for v, c in count.items() if c == 1]
        return max(candidates) if candidates else -1
