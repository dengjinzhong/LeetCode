function rndArray(){
  return Array.from({ length: 10 },() => Math.floor(Math.random() * 10 + 1))
}
const gas = rndArray() // 加油量
const cost = rndArray() // 消耗油量

console.log(gas, cost)

function getIsCarTravel(gas, cost) {
  const n = gas.length
  const getIsTravel = (i) => {
    let oil = 0
    let a = 0
    for (let j = 0; j < n; j++) {
      const num = i + j > n - 1 ? i + j - n : i + j
      oil += gas[num]
      oil -= cost[num]
      if (oil < 0) {
        a = num
        break
      }
    }
    return oil
  }
  for (let i = 0; i < n; i++) {
    const oil = getIsTravel(i)
    if (oil > 0) return i
  }
  return -1
}

console.log(getIsCarTravel(gas, cost))


function newGetIsCarTravel(gas, cost) {
  const n = gas.length
  let oil = 0
  let total = 0
  let i = 0
  for (i; i < n; i++) {
    for (let j = i; j < n; j++) {
      total += gas[j]
      total -= cost[j]
      oil += gas[j]
      oil -= cost[j]
      if (oil < 0) {
        j++
        break
      }
    }
    if (total > 0) return i
  }
  return -1
}


console.log(newGetIsCarTravel(gas, cost))


function fun(gas, cost) {
  const n = gas.length;
  let total = 0;
  let remain = 0;
  let start = 0;

  for(let i = 0; i < n; i++){
    total += gas[i];
    total -= cost[i]

    remain += gas[i];
    remain -= cost[i];

    // 如果remain < 0,说明从start到i走不通
    // 并且从start到i走不通，那么所有的solution中包含start到i的肯定都走不通
    // 因此我们重新从i + 1开始作为start
    if (remain < 0){
      remain = 0;
      start = i + 1;
    }
  }
// 事实上，我们遍历一遍，也就确定了每一个元素作为start是否可以走完一圈

// 如果costu总和大于gas总和，无论如何也无法走到终点
  return total >= 0? start : -1;
}

console.log(fun(gas, cost))
