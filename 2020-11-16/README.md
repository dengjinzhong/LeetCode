There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
gas = [2,2,3] // 加油量
cost = [4,1,1] // 消耗油量
环形路线上有N个加油站，第i个加油站有汽油量gas[i]，从i加油站到i+1站需要消耗汽油cost[i]，
你有一个空油箱汽车, 油箱是无限的.
问：从哪个加油站出发能够回到起始点，如果都不能则返回-1。

注意：解唯一。即每次输入相同数据输出的结果相同。
