# 开发者文档

为了帮助开发者快速上手，体验 GeneExpressionScatterPlot 带来的便利性，我们针对系统中的一系列功能模块以及特殊的外部接口做了详细的解释说明。这些说明包含了基本的代码、CSS样式文件、引进的特殊功能模块等等。在这些说明的基础上，您可以快速地了解本项目，并在项目基础上进行合理的拓展开发，以满足以我软件功能需求。开发者文档中涉及到的相关信息，我们为您展示如下：

------

####       网站主页：

- 网页消息窗提示实践

- 主线程中用于同步的 XMLHttpRequest （推荐不使用）

  #### JS：

- javaScript中的with()方法

- js中const,var,let区别

- css3 position fixed居中的问题

  #### C3：

- C3如何载入自定的颜色，

- C3散点如何修改透明度

- C3 改变坐标标点数据格式

- 修正坐标轴的padding

- C3图例文字排序问题

  #### 核心计算模块：

- p-value 计算代码

- P-value 计算器

  #### Git的项目管理

- 完整教程---使用git进行项目克隆与管理

  存在却

------



### 网页消息窗提示实践

![image-20200531102611248](F:\GeneExpressionScatterPlot-WuTaiwei\doc\img\image-20200531102611248.png)

html:

```html
<div id="popInfoBox"></div>
```

js:

可通过修改js中的delay，fadeOut属性值更改消息窗口的持续时间，消退时间。

```javascript
$(function () {
        $("#idOfInput").click(function () {
            $("#popInfoBox").prepend("<div class='errorSignal'>1</div>").show(850);
            // $("#popInfoBox").prepend("<div class='errorSignal'>2</div>").show();
            // $("#popInfoBox").prepend("<div class='errorSignal'>3</div>").show();
            // $("#popInfoBox").prepend("<div class='errorSignal'>4</div>").show();
            // $("#popInfoBox").prepend("<div class='errorSignal'>5</div>").show();
            // $("#popInfoBox").prepend("<div class='errorSignal'>6</div>").show();
            // $("#popInfoBox").prepend("<div class='errorSignal'>7</div>").show();
            $(".errorSignal").delay(3500).fadeOut(800);
        });
    })
```

css：

可修改css样式文件来更改消息提示窗的大小等物理属性。

Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局。具体参见[Flex 布局语法教程](https://www.runoob.com/w3cnote/flex-grammar.html)

```css
.errorSignal{
	width: 400px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	margin:15px;
	background-color: rgba(255, 0, 0, 0.6);
	color: white;
	border-radius: 5px;
}

#popInfoBox{
	position: fixed;
	width: 97vw;
	height: 95vh;
	margin: 0;
	padding: 0;
	pointer-events: none;//防止透明层挡住鼠标

//flex布局
	display: flex;
	justify-content: right;
	align-content: flex-end;
	flex-direction: column-reverse;
	flex-wrap:wrap;
	align-items :flex-end;
}
```

------

### p-value 计算代码

```js
clc;
sprintf("%.30f",(1-Ft(10.957913945876827,8))*2)

function ret=Bt ( a,b,x)
    syms t
    ret=int(t^(a-1)*(1-t)^(b-1),t,0,x);
end

function ret=It(a,b,x)
    ret=Bt(a,b,x)/Bt(a,b,1);
end

function ret=Ft(x,k)
    ret = 1-It(k/2,1/2,k/(x*x+k))/2;
end
```

------

### [C3如何载入自定的颜色](https://codepen.io/stefita/pen/RPWLWr)

由于种类繁多的时候，就需要载入足够多的颜色。如何做到拥有足够多的颜色，各个颜色间又有不错的区分度也就成了一门学问。

文件夹中ColorSet命名的相关文件与颜色载入功能相关。

![image-20200531105227669](F:\GeneExpressionScatterPlot-WuTaiwei\doc\img\image-20200531105227669.png)

以下是颜色载入的核心代码。

```js
				color: {//对散点图这个比较关键
                    pattern: ['#FABF62', '#ACB6DD']
                },
                data: {
                    x: 'x',
                    columns:
                        [
                      ['x', 'Category1', 'Category2'],
                      ['value', 300, 400]
                      ],

                    type: 'bar',
                   
                    //散点图这个不要加！
                    color: function(inColor, data) {
                        var colors = ['#FABF62', '#ACB6DD'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }
                        return inColor;
                    }
                },
```

### [C3散点如何修改透明度](https://github.com/c3js/c3/issues/1779)

```css
.c3-circle{
  -moz-opacity: 0.95 !important;
  opacity: 0.95 !important;
}
```

由于jQuery的办法效率低，且不适合本项目因此使用了CSS强制覆盖，简单而又高效。

### [css3 position fixed居中的问题](https://blog.csdn.net/xiebaochun/article/details/27679023)

```css
#element{
position:fixed;
margin:0 auto;
left:0;
right:0;
}
```

### [主线程中同步的 XMLHttpRequest 已不推荐使用](https://blog.csdn.net/lanyang123456/article/details/72578394)

这是来自前端编辑器的一个提示信息：

> 主线程中同步的 XMLHttpRequest 已不推荐使用，因其对终端用户的用户体验存在负面影响。更多帮助请见 http://xhr.spec.whatwg.org/

从提示中，大体可以明白，建议不要使用同步方式。

 原因是你的ajax执行了同步操作，即async设置为False，当然它并不影响程序的运行，但是右边有一道黄杠确实令人不爽，建议还是改成True为好(不设置默认为True)。

所以，将代码中的同步改为异步即可。

### [js中const,var,let区别](https://www.cnblogs.com/ksl666/p/5944718.html) 		

[Should You Truly Never Use var? ](https://dev.to/johnwolfe820/should-you-never-truly-use-var-bdi)有争议

### C3 改变坐标标点数据格式

![img](F:\GeneExpressionScatterPlot-WuTaiwei\doc\img\Z4CTL6}XJ_LU[YC[@A7ZZZR.png)



```js
axis: {
            x: {
                centered: true,
                label: d2name,
                tick: {
                    count: 15,
                    fix:true,
                    format: function (x) {
                        return Math.round(x*10000)/10000;
                    },
                }
            },
  ...
```

### [修正坐标轴的padding](https://c3js.org/reference.html#axis-y-max)

axis.y.max

Set max value of y axis.

Note:

Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).

### [图例说明文字排序问题](https://github.com/c3js/c3/pull/2314)

按照项目需求，图例需按照字序排列。

![image-20200531110144061](F:\GeneExpressionScatterPlot-WuTaiwei\doc\img\image-20200531110144061.png)

解决方案是，把data的order设为null，然后给列表数组排序。

### [javaScript中的with()方法](https://blog.csdn.net/mini_1251861209/article/details/80666494)

### [P-value计算器](https://www.easycalculation.com/statistics/p-value-t-test.php)

### [关于显著性检验，你想要的都在这儿了！！（基础篇）](https://www.cnblogs.com/hdu-zsk/p/6293721.html)

这项开发者说明旨在帮助大家更好地理解为什么项目要进行这样的统计、绘制与比较。

> “显著性检验”实际上是英文significance test的汉语译名。在统计学中，显著性检验是“统计假设检验”（Statistical hypothesis testing）的一种，显著性检验是用于检测科学实验中实验组与对照组之间是否有差异以及差异是否显著的办法。


### [完整教程--idea使用git进行项目管理](https://www.cnblogs.com/java-maowei/p/5950930.html)

这篇教程有点老了，但是还可以用，现在实现了运用IDEA实现项目管理。

