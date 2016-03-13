
- type: reply
- tag: javascript
- difficulty:  1
- from: https://github.com/hawx1993/Front-end-Interview-questions

--------

+运算符工作流程

---------

1. 如果有操作数是对象，转换为原始值
2. 此时如果有**一个操作数是字符串**，其他的操作数都转换为字符串并执行连接
3. 否则：**所有操作数都转换为数字并执行加法**

