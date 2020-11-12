Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

编写一个函数，找出字符串数组中最长的公共前缀字符串。
如果没有通用前缀，则返回一个空字符串""

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.


```javascript
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
```
