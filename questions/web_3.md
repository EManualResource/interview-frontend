
- type: reply
- tag: web
- difficulty:  1
- from: https://github.com/qiu-deqing/FE-interview

--------

doctype是什么,举例常见doctype及特点

---------


1. `<!doctype>`声明必须处于HTML文档的头部，在`<html>`标签之前，HTML5中不区分大小写
2. `<!doctype>`声明不是一个HTML标签，是一个用于告诉浏览器当前HTMl版本的指令
3. 现代浏览器的html布局引擎通过检查doctype决定使用兼容模式还是标准模式对文档进行渲染，一些浏览器有一个接近标准模型。
3. 在HTML4.01中`<!doctype>`声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容
4. HTML5不基于SGML，所以不用指定DTD

常见dotype：

1. **HTML4.01 strict**：不允许使用表现性、废弃元素（如font）以及frameset。声明：`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
2. **HTML4.01 Transitional**:允许使用表现性、废弃元素（如font），不允许使用frameset。声明：`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`
3. **HTML4.01 Frameset**:允许表现性元素，废气元素以及frameset。声明：`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`
4. **XHTML1.0 Strict**:不使用允许表现性、废弃元素以及frameset。文档必须是结构良好的XML文档。声明：``<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">``
5. **XHTML1.0 Transitional**:允许使用表现性、废弃元素，不允许frameset，文档必须是结构良好的XMl文档。声明： ``<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">``
6. **XHTML 1.0 Frameset**:允许使用表现性、废弃元素以及frameset，文档必须是结构良好的XML文档。声明：``<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">``
7. **HTML 5**: `<!doctype html>`

