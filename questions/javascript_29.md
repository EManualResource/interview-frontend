
- type: reply
- tag: javascript
- difficulty:  1
- from: https://github.com/qiu-deqing/FE-interview

--------

补充代码,鼠标单击Button1后将Button1移动到Button2的后面

---------

    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>TEst</title>
    </head>
    <body>

    <div>
       <input type="button" id ="button1" value="1" />
       <input type="button" id ="button2" value="2" />
    </div>

    <script type="text/javascript">
        var btn1 = document.getElementById('button1');
        var btn2 = document.getElementById('button2');

        addListener(btn1, 'click', function (event) {
            btn1.parentNode.insertBefore(btn2, btn1);
        });

        function addListener(elem, type, handler) {
            if (elem.addEventListener) {
                elem.addEventListener(type, handler, false);
                return handler;
            } else if (elem.attachEvent) {
                function wrapper() {
                    var event = window.event;
                    event.target = event.srcElement;
                    handler.call(elem, event);
                }
                elem.attachEvent('on' + type, wrapper);
                return wrapper;
            }
        }

    </script>
    </body>
    </html>

