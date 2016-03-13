
- type: reply
- tag: javascript
- difficulty:  1
- from: https://github.com/hawx1993/Front-end-Interview-questions

--------

现有一个字符串richText,是一段富文本,需要显示在页面上.有个要求,需要给其中只包含一个img元素的p标签增加一个叫pic的class.请编写代码实现.可以使用jQuery或KISSY.

---------


    function richText(text) {
        var div = document.createElement('div');
        div.innerHTML = text;
        var p = div.getElementsByTagName('p');
        var i, len;

        for (i = 0, len = p.length; i < len; ++i) {
            if (p[i].getElementsByTagName('img').length === 1) {
                p[i].classList.add('pic');
            }
        }

        return div.innerHTML;
    }

