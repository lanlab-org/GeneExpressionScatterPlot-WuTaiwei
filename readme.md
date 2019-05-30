# 散点图绘制器

本项目是作者软件工程基础课程的练习项目。

可以通过GitHub Page来访问demo网页：[网站页面](https://tieway59.github.io/ScatterPlotPainter/index.html)

## 使用指南

请依次在文件上传界面传入g1,g2,info三个json文件，确保顺序正确，且文件本身无数据错误

如不的上传info文件，或者没有匹配的类型，将默认category为“unknown”。

在绘制成功后，可以通过鼠标悬浮，查看单点的信息。

点击图标下方图例可以开关某项数据点。

页面下方是数据分析，默认按照pvalue从大到小排序。

可以在按纽栏选择开关某些页面元素。



## 错误解释

错误01：缺少文件g1;

错误02：缺少文件g2;

错误03：文件存在类型错误或未选择";
第一步检查的是用户上传的文件类型，请确保文件类型没有错误。

错误04：文件g1是空文件";

错误05：文件g2是空文件";
g1或g2如果出现空文件，对于本项目主题而言是没有意义的。


错误06：文件g1存在数据错误于x;

错误07：文件g2存在数据错误于x;
本项目会简单检查错误的数据，若键值对的键值不是数字类型，将被视为不可用。

错误08：发现info文件被当作g1上传";

错误09：发现info文件被当作g2上传";
在操作过程中的乱序提交会被检查并反馈，请注意提交顺序。


                  
