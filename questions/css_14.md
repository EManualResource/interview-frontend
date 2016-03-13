
- type: reply
- tag: css
- difficulty:  1
- from: https://github.com/hawx1993/Front-end-Interview-questions

--------

外边距折叠(collapsing margins)

---------

毗邻的两个或多个``margin``会合并成一个margin，叫做外边距折叠。规则如下：

1. 两个或多个毗邻的普通流中的块元素垂直方向上的margin会折叠
2. 浮动元素/inline-block元素/绝对定位元素的margin不会和垂直方向上的其他元素的margin折叠
3. 创建了块级格式化上下文的元素，不会和它的子元素发生margin折叠
4. 元素自身的margin-bottom和margin-top相邻时也会折叠

