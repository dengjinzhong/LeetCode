function getOtherArr(arr) {
  const obj = {}
  arr.forEach(item => {
    obj[item] = item
  })
  const array = []
  const length = arr.length
  for (let i = 1; i < length; i++) {
    if (!obj[i]) array.push(i)
  }
  return array
}

function getOtherArr2(nums) {
  const res = []
  let cur = 0
  const length = nums.length
  for (let i = 0; i < length; i++) {
    res[nums[i]] = true
  }
  for (let i = 0; i < length; i++) {
    if (res[i + 1] === undefined) {
      res[cur++] = i + 1
    }
  }
  res.length = cur
  return res
}

const arr = [4,3,2,7,8,2,3,1]

console.log(getOtherArr(arr))
console.log(getOtherArr2(arr))
