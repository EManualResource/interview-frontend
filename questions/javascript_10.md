
- type: reply
- tag: javascript
- difficulty:  1
- from: https://github.com/qiu-deqing/FE-interview

--------

应用程序存储和离线web应用

---------

HTML5新增应用程序缓存，允许web应用将应用程序自身保存到用户浏览器中，用户离线状态也能访问。
1.为html元素设置manifest属性:``<html manifest="myapp.appcache">``，其中后缀名只是一个约定，真正识别方式是通过``text/cache-manifest``作为MIME类型。所以需要配置服务器保证设置正确
2.manifest文件首行为``CACHE MANIFEST``，其余就是要缓存的URL列表，每个一行，相对路径都相对于manifest文件的url。注释以#开头
3.url分为三种类型：``CACHE``:为默认类型。``NETWORK``：表示资源从不缓存。 ``FALLBACK``:每行包含两个url，第二个URL是指需要加载和存储在缓存中的资源， 第一个URL是一个前缀。任何匹配该前缀的URL都不会缓存，如果从网络中载入这样的URL失败的话，就会用第二个URL指定的缓存资源来替代。以下是一个文件例子：

```
CACHE MANIFEST

CACHE:
myapp.html
myapp.css
myapp.js

FALLBACK:
videos/ offline_help.html

NETWORK:
cgi/
```

