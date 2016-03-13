
- type: reply
- tag: javascript
- difficulty:  1
- from: https://github.com/qiu-deqing/FE-interview

--------

函数内部arguments变量有哪些特性,有哪些属性,如何将它转换为数组

---------


- arguments所有函数中都包含的一个局部变量，是一个类数组对象，对应函数调用时的实参。如果函数定义同名参数会在调用时覆盖默认对象
- arguments[index]分别对应函数调用时的实参，并且通过arguments修改实参时会同时修改实参
- arguments.length为实参的个数（Function.length表示形参长度）
- arguments.callee为当前正在执行的函数本身，使用这个属性进行递归调用时需注意this的变化
- arguments.caller为调用当前函数的函数（已被遗弃）
- 转换为数组：<code>var args = Array.prototype.slice.call(arguments, 0);</code>

