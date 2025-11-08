package main

import (
	"sort"
	"strings"
)

func isAnagram(s string, t string) bool {
	runes1 := []rune(s)
	runes2 := []rune(t)

	sliceOne := make([]string, len(runes1))
	sliceTwo := make([]string, len(runes2))

	for i, r := range runes1 {
		sliceOne[i] = string(r)
	}

	for i, r := range runes2 {
		sliceTwo[i] = string(r)
	}

	sort.Strings(sliceOne)
	sort.Strings(sliceTwo)

	wordOne := strings.Join(sliceOne, "")
	wordTwo := strings.Join(sliceTwo, "")

	return wordOne == wordTwo
}
