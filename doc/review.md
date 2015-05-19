## `util.js`第三部分

参考实现：

[dom](https://github.com/hushicai/ife-task0002/blob/master/src/dom.js)

## 小练习3

参考实现：

[Slider](https://github.com/hushicai/ife-task0002/blob/master/src/Slider.js)

## review

### common

* 代码严重不规范
* 有不少同学的任务没有做完...
* 也有不少同学做得不完整，练习跑不起来。
* 有不少代码神似...莫非互相抄？

### DOM部分

* 很多操作符没有弄明白就使用了，比如`instanceof`、`typeof`等，这些其实都是运算符，感觉很多人把它当作函数使用了，虽然可以这么用...
* 代码复用度不足，比如`addClass`、`removeClass`，其实可以先实现一个`hasClass`来复用，但不少人都是直接复制使用。
* 感觉目前大部分的功能实现都是用百度搜出来，比如`getPosition`这个方法的实现，大部分人用了`offsetParent`，这已经过时了...何况算出来的还不是相对浏览器窗口的，相对于文档左上角和相对于浏览器窗口是两回事...
* `mini $`这部分代码，有几个人的代码是一样的...

### 小练习3

* 不少人没有做轮播组件...
* 组件实现方面，接口设计能力不足，耦合太严重，缺乏面向对象编程思想。
* dom事件理解不足，比如Slider的组件，需要用到mouseenter、mouseleave，但很多同学直接使用mouseover、mouseout了
* 定时器控制紊乱，感觉对js这门语言的理解还不足...
