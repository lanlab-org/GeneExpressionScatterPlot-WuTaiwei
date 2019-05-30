# 网页消息窗提示实践

html:
```html
<div id="popInfoBox"></div>
```

js:
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

# pvalue 计算代码

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



# [javaScript中的with()是什么方法?](https://blog.csdn.net/mini_1251861209/article/details/80666494)
 
# [P值计算器](https://www.easycalculation.com/statistics/p-value-t-test.php)
一个在线公式

# [关于显著性检验，你想要的都在这儿了！！（基础篇）](https://www.cnblogs.com/hdu-zsk/p/6293721.html)
学习显著性检验


# [完整教程--idea使用git进行项目管理](https://www.cnblogs.com/java-maowei/p/5950930.html)
这篇教程有点老了，但是还可以用，现在实现了运用IDEA实现项目管理。

# [C3如何载入自定的颜色](https://codepen.io/stefita/pen/RPWLWr)

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

# [C3散点如何修改透明度](https://github.com/c3js/c3/issues/1779)

```css
.c3-circle{
  -moz-opacity: 0.95 !important;
  opacity: 0.95 !important;
}
```

我决定用CSS强制覆盖了，也有jQuery的办法但是感觉效率低，而且不适合我这个项目。



# [css3 position fixed居中的问题](https://blog.csdn.net/xiebaochun/article/details/27679023)

```css
#element{
position:fixed;
margin:0 auto;
left:0;
right:0;
}
```

# [主线程中同步的 XMLHttpRequest 已不推荐使用](https://blog.csdn.net/lanyang123456/article/details/72578394)

async: true

# [js中const,var,let区别](https://www.cnblogs.com/ksl666/p/5944718.html) 		

[Should You Truly Never Use var? ](https://dev.to/johnwolfe820/should-you-never-truly-use-var-bdi)有争议

# C3 改变坐标标点数据格式

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

# [修正坐标轴的padding](https://c3js.org/reference.html#axis-y-max)
axis.y.max

Set max value of y axis.

Note:

Padding will be added based on this value, so if you don't need the padding, please set axis.y.padding to disable it (e.g. axis.y.padding = 0).

# [图例排序问题](https://github.com/c3js/c3/pull/2314)
解决方案是，把data的order设为null，然后给列表数组排序。
