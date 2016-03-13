
- type: reply
- tag: javascript
- difficulty:  1
- from: https://github.com/qiu-deqing/FE-interview

--------

请评价以下事件监听器代码并给出改进意见

---------


```
if (window.addEventListener) {
  var addListener = function (el, type, listener, useCapture) {
    el.addEventListener(type, listener, useCapture);
  };
}
else if (document.all) {
  addListener = function (el, type, listener) {
    el.attachEvent('on' + type, function () {
      listener.apply(el);
    });
  };
}
```

作用：浏览器功能检测实现跨浏览器DOM事件绑定

优点：

1. 测试代码只运行一次，根据浏览器确定绑定方法
2. 通过``listener.apply(el)``解决IE下监听器this与标准不一致的地方
3. 在浏览器不支持的情况下提供简单的功能，在标准浏览器中提供捕获功能

缺点：

1. document.all作为IE检测不可靠，应该使用if(el.attachEvent)
2. addListener在不同浏览器下API不一样
3. ``listener.apply``使this与标准一致但监听器无法移除
4. 未解决IE下listener参数event。 target问题

改进:

```
var addListener;

if (window.addEventListener) {
  addListener = function (el, type, listener, useCapture) {
    el.addEventListener(type, listener, useCapture);
    return listener;
  };
}
else if (window.attachEvent) {
  addListener = function (el, type, listener) {
    // 标准化this，event，target
    var wrapper = function () {
      var event = window.event;
      event.target = event.srcElement;
      listener.call(el, event);
    };

    el.attachEvent('on' + type, wrapper);
    return wrapper;
    // 返回wrapper。调用者可以保存，以后remove
  };
}
```

