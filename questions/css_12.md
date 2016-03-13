
- type: reply
- tag: css
- difficulty:  1
- from: https://github.com/qiu-deqing/FE-interview

--------

如何创建块级格式化上下文(block formatting context),BFC有什么用

---------

创建规则：

1. 根元素
2. 浮动元素（``float``不是``none``）
3. 绝对定位元素（``position``取值为``absolute``或``fixed``）
4. ``display``取值为``inline-block``,``table-cell``, ``table-caption``,``flex``, ``inline-flex``之一的元素
5. ``overflow``不是``visible``的元素


作用：

1. 可以包含浮动元素
2. 不被浮动元素覆盖
3. 阻止父子元素的margin折叠

