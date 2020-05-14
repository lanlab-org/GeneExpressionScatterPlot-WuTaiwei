# 散点图绘制器

这是一款基因表达散点图可视化软件，用于分析两个基因是否在表达水平上具有相关性。

该软件不仅考虑两个基因在所有条件下是否具有相关性，也考虑两个基因在特定条件下是否具有相关性。

对于该绘制器，输入为3个JSON文件。

- g1.json是g1在各个样本中的表达值，JSON类型。例子：

  ```
  {"Sample01": 2.53, "Sample02": 2.45, "Sample03": 1.88, "Sample04": 1.85, "Sample05": 1.94}
  ```

- g2.json是g2在各个样本中的表达值，JSON类型。例子：

  ```
   {"Sample01": 9.05, "Sample02": 7.20, "Sample03": 6.94, "Sample04": 6.34, "Sample05": 6.78}
  ```

- info.json是每个样本的信息，JSON类型。例子：

  ```
   {"Sample01": {"category": "Type1", "detail": "TBA"}, "Sample02": {"category": "Type1", "detail": "TBA"}, "Sample03": {"category": "Type1", "detail": "TBA"}, "Sample04": {"category": "Type1", "detail": "TBA"}, "Sample05": {"category": "Type1", "detail": "TBA"}}
  ```

该软件会输出一个散点图，以及在各个生物条件下的基因表达水平相关性以及p值。

可以通过GitHub Page来访问demo网页：[网站页面](https://tieway59.github.io/ScatterPlotPainter/index.html)

## 安装与使用指南

### 安装

本软件无需安装。下载到这个项目到你的本地，点击ScatterPlotPainter/index.html即可开始使用。

### 使用

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

## Current Status

目前，我们有2个协作组共6人在改进这个基因表达相关性分析工具。

除了GitHub上的更新之外，各个小组还用看板来安排事务，每个成员集中精力把一个事务做好。

- [伍泰炜、周佳威、应舸小组]: http://118.25.96.118/kanboard/?controller=BoardViewController&amp;action=show&amp;project_id=26&amp;search=status%3Aopen

- 徐闰钞、陈肖飞、方梓安小组

各个协作组在每个星期四进行每周总结(Weekly Review)探讨进行下一步工作。

| 日期 | 主持人 | 书记员 |
| :--: | :----: | :----: |
| 4.9  | 伍泰炜 | 徐闰钞 |
| 4.16 | 周佳威 | 陈肖飞 |
| 4.23 | 徐闰钞 |  应舸  |
| 4.30 |  应舸  | 周佳威 |
| 5.7  | 方梓安 | 伍泰炜 |
| 5.14 | 陈肖飞 | 徐闰钞 |
| 5.21 | 伍泰炜 |  应舸  |
| 5.28 | 徐闰钞 | 周佳威 |

主持人，准备本次要讨论的事项，不超过3项，每项讨论不超过30分钟。书记员，记录讨论的内容。

## Bug Tracker

请在我们的[缺陷跟踪器](http://118.25.96.118/bugzilla/describecomponents.cgi?product=Gene Expression Scatter Plot)上报告关于软件的所有缺陷，或者提交额外功能的请求。

你需要开通账户才能提交报告。 如果你需要账号，请通过电子邮件联系蓝珲 lanhui at zjnu.edu.cn。

## Requirement Traceability Matrix

每个需求至少伴有一个测试。 我们用[RMT.py](https://github.com/spm2020spring/RequirementTraceabilityMatrix)这个Python小程序来产生Requirement Traceability Matrix。

每个协作组至少要有一个成员专门负责产生这个需求追踪矩阵。

该成员需要编辑 [srs.txt](https://github.com/lanlab-org/GeneExpressionScatterPlot-XuMengqi/blob/IMPROVE-README-Hui/gene_expression_scatter_plot/test/srs.txt) 与 [test.txt](https://github.com/lanlab-org/GeneExpressionScatterPlot-XuMengqi/blob/IMPROVE-README-Hui/gene_expression_scatter_plot/test/test.txt)。 注意: 大家协作编辑 srs.txt 与 test.txt， 而不是每个组产生自己的 srs.txt 与 test.txt。 这两个文件在 gene_expression_scatter_plot/test 目录下。 对于整个软件，我们只需要一个需求追踪矩阵。

这是一个[RTM.py软件的需求追踪矩阵例子](http://lanlab.org/course/2020s/spm/test_report.html)。这是产生这个矩阵的 [srs.txt](https://github.com/spm2020spring/RequirementTraceabilityMatrix/blob/master/srs.txt) 与 [test.txt](https://github.com/spm2020spring/RequirementTraceabilityMatrix/blob/master/test.txt)。

## 需求分析文档

- 2019年4月课堂讨论: http://lanlab.org/course/2019s/se/category-specific-scatterplot.txt
- 2020年3月软件改进计划: http://lanlab.org/course/2020s/spm/decide-areas-for-improvement-review-class02395.html
- 徐梦旗文档: https://srsh.readthedocs.io/zh/latest/
- 伍泰炜文档：https://201736900125.readthedocs.io/zh_CN/latest
- 余慧、叶红霞文档: https://omg-se-201736900117.readthedocs.io/en/latest/
- 袁世家文档: https://srs-writing.readthedocs.io/en/latest/
- 吴贞娴文档: https://system1.readthedocs.io/zh_CN/latest/

我们需要将上述的需求分析文档内容合并，做出一个优于上述任何一个文档的文档。该文档的内容可能会与**Requirement Traceability Matrix**那节中提到的srs.txt的内容有所重合。 需要避免这种内容上的重合。 如果该文档中出现 srs.txt 中的内容，只需要引用 srs.txt 即可，而非重复 srs.txt 中的内容。不让同一内容出现在两个地方，这么做的目的是为了[避免文档产生不一致性](http://lanlab.org/course/2019s/se/parnas-a-rational-design-process.html#f)。

## 原始作者

伍泰炜 学号：201736900125

Email：[tieway59@foxmail.com](http://118.25.96.118/kanboard/?controller=UserViewController&action=profile&user_id=41)

## How to contribute

We welcome your participation in this project.

Your participation does not have to be in the form of contributing code. You could help us on ideas, suggestions, documentation, etc.

You need to be an invited member of Lan Laboratory before you can push your feature branch or bugfix branch to the central reops at https://github.com/lanlab-org

Send Hui (lanhui at zjnu.edu.cn) an email message including your GitHub account name so that he could invite you to be a member of Lan Laboratory.

As of Apri 1, 2020, there are 33 members in Lan Laboratory (https://github.com/orgs/lanlab-org/people).

You will use the feature-branching workflow (see below) when interacting with the central repo. The main point of this workflow is that you work on a branch on your local drive, push that branch to the central repo, and create a Pull Request (i.e., Pull Me Request) at GitHub for other people to review your changes. When everything is OK, then someone could merge your changes to the master branch in the central repo.

I believe that code review at the Pull Request stage is important for both improving code quality and improving team quality.

### The Feature-branching Workflow

We will use the feature-branching workflow for collaboration. The idea is that you make your own branch, work on it, and push this branch to the central repo for review.

Check the section The feature-branching workflow in the following link for more detail:

https://github.com/spm2020spring/TeamCollaborationTutorial/blob/master/team.rst

## Discussion Forum

We use IRC for asynchronous communication.

Our IRC channel is at #[scatterplot@irc.freenode.org](mailto:scatterplot@irc.freenode.org).

Check [IRC Instructions](http://lanlab.org/course/2020s/spm/irc-instruction.txt) for quick start.

## Project Cheklist

- [ ]  Mission statement
- [ ] FAQ (should be grown gradually, not suddenly)
- [ ]  COPYING/LICENSE
- [ ] Developer Documentation
- [ ] User Documentation
- [ ] Code well commented (1 comment per 3-9 SLOC)

## Contributor List

[@TieWay59](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=TieWay59) - 伍泰炜 - 201736900125

[@wuyanshuai](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=wuyanshuai) - 周佳威 - 201736900130

[@HandsomePupil](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=HandsomePupil) - 应   舸 - 201736900128

==============

[@zjnuxrc](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=zjnuxrc) - 徐闰钞 - 201736900127

[@yueyue0808](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=yueyue0808) - 陈肖飞 - 201736900104

[@fangzian](https://github.com/lanlab-org/GeneExpressionScatterPlot-WuTaiwei/commits?author=fangzian) - 方梓安 - 201736900105
