# 从定义数据角度对比:

ref 用来定义:基本数据类型
reactive 用来定义:对象或数组类型数据
备注:ref 也可以用来定义对象或数组类型数据,内部自动通过 reactive 转为代理对象

# 原理角度对比

ref 通过 Object.defineProperty 的 get 和 set 实现响应式(数据劫持)
reactive 通过 Proxy 实现响应式(数据劫持) 并通过 Reflet 操作源对象内部的数据

# 使用角度

ref 定义的数据:操作数据需要.value 读取数据时模版中直接读取 不需要.value
reavtive 定义的数据: 操作数据与读取数据 都不需要.value
