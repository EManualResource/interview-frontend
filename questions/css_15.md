
- type: reply
- tag: css
- difficulty:  1
- from: https://github.com/qiu-deqing/FE-interview

--------

如何确定一个元素的包含块(containing block)

---------


1. 根元素的包含块叫做初始包含块，在连续媒体中他的尺寸与viewport相同并且anchored at the canvas origin；对于paged media，它的尺寸等于page area。初始包含块的direction属性与根元素相同。
2. ``position``为``relative``或者``static``的元素，它的包含块由最近的块级（``display``为``block``,``list-item``, ``table``）祖先元素的**内容框**组成
3. 如果元素``position``为``fixed``。对于连续媒体，它的包含块为viewport；对于paged media，包含块为page area
4. 如果元素``position``为``absolute``，它的包含块由祖先元素中最近一个``position``为``relative``,``absolute``或者``fixed``的元素产生，规则如下：
    - 如果祖先元素为行内元素，the containing block is the bounding box around the **padding boxes** of the first and the last inline boxes generated for that element.
    - 其他情况下包含块由祖先节点的**padding edge**组成

    如果找不到定位的祖先元素，包含块为**初始包含块**

