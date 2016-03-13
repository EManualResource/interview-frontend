
- type: reply
- tag: css
- difficulty:  1
- from: https://github.com/qiu-deqing/FE-interview

--------

stacking context,布局规则

---------

z轴上的默认层叠顺序如下（从下到上）：

1. 根元素的边界和背景
2. 常规流中的元素按照html中顺序
3. 浮动块
4. positioned元素按照html中出现顺序

如何创建stacking context：

1. 根元素
2. z-index不为auto的定位元素
3. a flex item with a z-index value other than 'auto'
4. opacity小于1的元素
5. 在移动端webkit和chrome22+，z-index为auto，position: fixed也将创建新的stacking context

