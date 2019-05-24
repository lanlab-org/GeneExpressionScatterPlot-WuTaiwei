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
