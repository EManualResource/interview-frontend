
- type: reply
- tag: javascript
- difficulty:  1
- from: https://github.com/qiu-deqing/FE-interview

--------

focus/blur与focusin/focusout的区别与联系

---------


1. focus/blur不冒泡，focusin/focusout冒泡
2. focus/blur兼容性好，focusin/focusout在除FireFox外的浏览器下都保持良好兼容性，如需使用事件托管，可考虑在FireFox下使用事件捕获elem.addEventListener('focus', handler, true)
3. 可获得焦点的元素：
    1. window
    2. 链接被点击或键盘操作
    3. 表单空间被点击或键盘操作
    4. 设置`tabindex`属性的元素被点击或键盘操作

