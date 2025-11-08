package main

import "slices"

func isAnagram(s string, t string) bool {
	count := make([]rune, 26)

	for _, char := range s {
		count[rune(char)-'a']++
	}

	for _, char := range t {
		count[rune(char)-'a']--
	}

	return slices.Equal(count, make([]rune, 26))
}

func main() {
	var passed bool = isAnagram("hannah", "hannah")
	print(passed)
}
