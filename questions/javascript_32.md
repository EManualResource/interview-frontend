
- type: reply
- tag: javascript
- difficulty:  1
- from: https://github.com/hawx1993/Front-end-Interview-questions

--------

如何判断一个对象是否为数组

---------

如果浏览器支持Array.isArray()可以直接判断否则需进行必要判断

```
/**
 * 判断一个对象是否是数组，参数不是对象或者不是数组，返回false
 *
 * @param {Object} arg 需要测试是否为数组的对象
 * @return {Boolean} 传入参数是数组返回true，否则返回false
 */
function isArray(arg) {
    if (typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}
```

