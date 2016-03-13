
- type: reply
- tag: javascript
- difficulty:  1
- from: https://github.com/hawx1993/Front-end-Interview-questions
--------

对象到数字的转换步骤

---------


    1. 如果对象有valueOf()方法并且返回元素值，javascript将返回值转换为数字作为结果
    2. 否则，如果对象有toString()并且返回原始值，javascript将返回结果转换为数字作为结果
    3. 否则，throws a TypeError

