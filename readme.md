# 散点图绘制器

本项目是作者软件工程基础课程的练习项目。

可以通过GitHub Page来访问demo网页：[网站页面](https://tieway59.github.io/ScatterPlotPainter/index.html)

## 使用指南

请依次在文件上传界面传入g1,g2,info三个json文件，确保顺序正确，且文件本身无数据错误。

不上传info文件，或者没有匹配的类型，网页将默认category为“unknown”。

在绘制成功后，可以通过鼠标悬浮数据点，查看这个点的信息。

点击图标下方图例可以开关某项数据点。

页面最下方是数据分析栏，默认按照pvalue从大到小排序。

可以在按钮栏选择开关某些页面元素。



## 错误解释

错误01：缺少文件g1;

错误02：缺少文件g2;

错误03：文件存在类型错误或未选择;
第一步检查的是用户上传的文件类型，请确保文件类型没有错误。

错误04：文件g1是空文件;

错误05：文件g2是空文件;
g1或g2如果出现空文件，对于本项目主题而言是没有意义的。


错误06：文件g1存在数据错误于(···);

错误07：文件g2存在数据错误于(···);
本项目会简单检查错误的数据，若键值对的键值不是数字类型，将被视为不可用。

错误08：发现info文件被当作g1上传;

错误09：发现info文件被当作g2上传;
在操作过程中的乱序提交会被检查并反馈，请注意提交顺序。

# Contributor List

[@TieWay59](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=TieWay59) - 伍泰炜 - 201736900125

[@wuyanshuai](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=wuyanshuai) - 周佳威 - 201736900130

[@HandsomePupil](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=HandsomePupil) - 应   舸 - 201736900128

==============

[@zjnuxrc](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=zjnuxrc) - 徐闰钞 - 201736900127

[@yueyue0808](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=yueyue0808) - 陈肖飞 - 201736900104

[@fangzian](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=fangzian) - 方梓安 - 201736900105
