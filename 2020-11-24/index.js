const list = [73, 74, 75, 71, 69, 72, 76, 73]

// 暴力解法
function getDay(arr) {
  const length = arr.length
  const array = []
  for (let i = 0; i < length; i++) {
    const item = arr[i]
    array.push(0)
    for (let j = i; j < length; j++) {
      const nowItem = arr[j]
      if (nowItem > item) {
        array[i] = j - i
        break
      }
    }
  }
  return array
}
// 栈结构
function getDay1(arr) {
  const stack = []
  const result = []
  arr.forEach((item, index) => {
    result.push(0)
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[index]) {
      const peek = stack.pop()
      result[peek] = index - peek
    }
    stack.push(index)
  })
  return result
}

console.log(getDay(list))
console.log(getDay1(list))
