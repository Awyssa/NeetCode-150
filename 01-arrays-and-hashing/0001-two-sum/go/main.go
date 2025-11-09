package main

func twoSum(nums []int, target int) []int {

	m := make(map[int]int)

	for i, num := range nums {

		complement := target - num

		if j, ok := m[complement]; ok {
			return []int{j, i}
		}

		m[num] = i
	}
	return []int{}
}

func main() {
	twoSum([]int{1, 2, 3, 4, 5}, 8)
}
