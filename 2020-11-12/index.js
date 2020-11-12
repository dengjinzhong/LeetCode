const list1 = ["flower","flow","flight"]
const list2 = ["aabog","aabracecar","aacar"]

function findAlikePrefix(arr) {
  const length = arr.length
  let str = ''
  let minLength = 0
  let isOver = false
  arr.forEach(item => {
    if (!minLength) minLength = item.length
    else if (item.length < minLength) minLength = item.length
  })
  for (let i = 0; i < minLength; i++) {
    for (let j = 0; j < length; j++) {
      const item = arr[j]
      const s = item[i]
      if (j === 0) str += s
      else {
        if (s !== str[i]) {
          str = str.substr(0, i)
          isOver = true
          break
        }
      }
    }
    if (isOver) break
  }
  return str
}

var data1 = +new Date()
console.log(findAlikePrefix(list1))
console.log(findAlikePrefix(list2))
var data2 = +new Date()
console.log(data2 - data1)

/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

function isCommonPrefix(strs, middle) {
  const prefix = strs[0].substring(0, middle);
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(prefix)) return false;
  }

  return true;
}
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // trie 解法
  // 时间复杂度O(m) 空间复杂度O(m * n)

  // tag: 二分法
  // 时间复杂度 O(n*logm)  空间复杂度O(1)
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let minLen = Number.MAX_VALUE;

  for (let i = 0; i < strs.length; i++) {
    minLen = Math.min(minLen, strs[i].length);
  }

  let low = 0;
  let high = minLen;

  while (low <= high) {
    const middle = (low + high) >> 1;
    if (isCommonPrefix(strs, middle)) low = middle + 1;
    else high = middle - 1;
  }

  return strs[0].substring(0, (low + high) >> 1);
};
var data3 = +new Date()
console.log(longestCommonPrefix(list1))
console.log(longestCommonPrefix(list2))
var data4 = +new Date()
console.log(data3 - data4)
