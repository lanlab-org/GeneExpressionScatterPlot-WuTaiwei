/* exported beginSSP, clearButton, returenButton,infoButton,calcButton*/


//初始化数组和对象
let d1 = [];        // 存放g1数据的json对象
let d2 = [];        // 存放g2数据的json对象
let info = [];
let oto = {};
let co = [];
let mp = {};
let dtls = [];
let tmp1, tmp2, tmp3;
let chart;
let colorSet;

//读入本地ColorSet
$.ajax({
    url: "data/generator/ColorSet.json",
    dataType: "json",
    async: true,
    crossDomain: true,
    success: function (data) {
        colorSet = data;
    },
    error: function (XMLHttpRequest, status) {
        if (status === "error") {
            alert("颜色丢失");
        } else {
            alert("访问异常");
        }
    }
});
//文件上传
window.onload = function () {
    let input = document.getElementById("data1");         //得到上传按钮的对象
    //console.log(info);                                            //测试用
    input.onchange = function () {                                   //给按钮的onchange写一个读取函数
        const file = this.files[0];                                   //其实是可以扩展到多文件上传的，不过我们就选第一个，也就是下标0
        if (!!file) {                                                 //!!是一个js的语法，表示后面的变量不是null/undefined/空串，实用写法。
            const reader = new FileReader();                            //实例化一个FileReader对象
            reader.readAsText(file, "gbk");                         //借助 FileReader 的方法，按照文本格式读入文件，第二个参数是编码方式（可空）
            reader.onload = function () {

                tmp1 = this.result;                                       //然后在FileReader的onload方法里，刚刚读入的文件能以文本的形式得到了
                                                                          //注意这个对象还是文本，不能拿来直接用，但首先你可以把它带出来。
            };
        }
    };
    input = document.getElementById("data2");
    //console.log(f);
    input.onchange = function () {
        const file = this.files[0];
        if (!!file) {
            const reader = new FileReader();
            reader.readAsText(file, "gbk");
            reader.onload = function () {

                tmp2 = this.result;
                //console.log(this.result);                                     
            };
        }
    };
    input = document.getElementById("data3");
    //console.log(f);
    input.onchange = function () {
        const file = this.files[0];
        if (!!file) {
            const reader = new FileReader();
            reader.readAsText(file, "gbk");
            //??gbk or UTF-8
            reader.onload = function () {
                tmp3 = this.result;
                //console.log(this.result);                                     
            };
        }
    };
};


let myDate;
let time1, time2;

//处理数据绘制图表
function beginSSP() {


    if (check3 === -1 || check2 === -1 || check1 === -1) {
        //alert("上传文件存在错误。");
        displayErrorCode(3);//类型错误
        return;
    }                                                                                          //check3代表有传入info
    if (check1 === 0 || check2 === 0) {
        //alert("文件g1，g2尚未正常上传。");
        if (check1 === 0) displayErrorCode(1);
        if (check2 === 0) displayErrorCode(2);
        return;
    }


    //计时器开始
    myDate = new Date();
    time1 = myDate.getTime();
    //解析文件
    d1 = JSON.parse(tmp1);
    d2 = JSON.parse(tmp2);
    //因为允许用户不上传info，所以要提防tmp3是undefined的情况
    if (!!tmp3) info = JSON.parse(tmp3);
    //提示信息（反馈点数）
    const len_d1 = Object.getOwnPropertyNames(d1).length;
    const len_d2 = Object.getOwnPropertyNames(d2).length;
    const len_info = Object.getOwnPropertyNames(info).length;

    console.log(len_d1);
    console.log(len_d2);
    console.log(len_info);
    if ((!len_d1) || (!len_d2)) {
        if (!len_d1) displayErrorCode(4);
        if (!len_d2) displayErrorCode(5);
        return;
    }

    for (let p in d1) {
        if (d1[p].detail !== undefined) {
            displayErrorCode(8);
            return;
        }
        if (isNotANumber(d1[p])) {
            //console.log(d1[p]);
            displayErrorCode(6, p);
            return;
        }
    }
    for (let p in d2) {
        if (d2[p].detail !== undefined) {
            displayErrorCode(9);
            return;
        }
        if (isNotANumber(d2[p])) {
            displayErrorCode(7, p);
            return;
        }
    }

    displaySuccess();

    //返回页头
    scrollTo(0, 0);
    //先隐藏部分卡片
    document.getElementById("idOfInput").style.display = "none";
    document.getElementById("idOfReminder").style.display = "none";
    document.getElementById("idOfChart").style.display = "block";
    document.getElementById("idOfNotice").style.display = "block";
    document.getElementById("idOfOptions").style.display = "block";

    //统计点数
    let countDots = 0;
    //遍历info改成了遍历d1
    for (let p in d1) {
        if (d1.hasOwnProperty(p)) {
            //注意可能会遍历到继承的属性，所以要检查一下是不是当前对象自己的属性，本例子中其实不会。
            if (!!d2[p]) {
                let nm = (!info[p]) ? "unknown" : info[p].category;
                //name
                let dtl = (!info[p]) ? "" : info[p].detail;
                //detail

                if (!oto[nm]) {
                    oto[nm] = nm + ".";
                    co.push([nm]);
                    dtls.push([nm]);
                    mp[nm] = co.length - 1;

                    co.push([nm + "."]);
                    dtls.push([nm + "."]);
                    mp[nm + "."] = co.length - 1;
                }
                //console.log(mp[nm]);
                co[mp[nm]].push(d2[p]);
                dtls[mp[nm]].push(p);
                co[mp[nm + "."]].push(d1[p]);
                // dtls[mp[nm + "."]].push(info[p].detail);
                //d1做x轴 存到nm+"."的标记里；
                dtls[mp[nm + "."]].push(dtl);
                countDots++;

            }
        }
    }

    document.getElementById("AlarmFile1").innerHTML = d1name;
    document.getElementById("dotsOfFile1").innerHTML = len_d1 + "";
    document.getElementById("AlarmFile2").innerHTML = d2name;
    document.getElementById("dotsOfFile2").innerHTML = len_d2 + "";
    document.getElementById("AlarmFile3").innerHTML = infoname;
    document.getElementById("dotsOfFile3").innerHTML = len_info + "";

    //c3接口

    //为给legend排序
    co.sort(function (a, b) {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    });
    console.log(co);

    chart = c3.generate({
        transition: {
            duration: 500
        },
        padding: {
            left: 50,
            bottom: 0,
            top: 0,
        },
        size: {
            height: 1200
            //width: 1200,
        },
        color: {
            pattern: colorSet
        },
        data: {
            xSort: false,
            order: null,
            //关键选项不要给点排序
            xs: oto,
            columns: co,
            type: "scatter"
        },
        axis: {

            x: {
                centered: true,
                label: d1name,
                padding: {
                    left: 0,
                },                //标度的内边距，最小值最大值于外界的距离
                //min: 0,                   //标度最小值
                tick: {
                    culling: false,         //跳跃标度设置
                    count: 30,              //标度个数
                    //fit: false,              //标度自适应
                    format: function (x) {   //标度格式设置
                        return Math.round(x * 10000) / 10000;
                    }
                }
            },
            y: {
                label: d2name,
                padding: {
                    bottom: 10,
                },
                //min: 0,
                tick: {
                    culling: false,
                    count: 30,
                    //fit: false,
                    format: function (x) {
                        return Math.round(x * 10000) / 10000;
                    }
                }
            }
        },
        point: {                                                                                      //调整点的大小
            focus: {
                expand: {
                    enabled: true,
                    r: 5
                }
            }
        },
        legend: {},
        tooltip: {
            format: {
                title: function (d) {
                    //读取G1的坐标
                    document.getElementById("_x").innerHTML = d;
                },
                value: function (value, ratio, id, index) {
                    document.getElementById("_y").innerHTML = value;
                    document.getElementById("_tissue").innerHTML = id;
                    document.getElementById("_name").innerHTML = dtls[mp[id]][index + 1];
                    document.getElementById("_detail").innerHTML = dtls[mp[id + "."]][index + 1];
                }
            }
        }
    });

    myDate = new Date();
    time2 = myDate.getTime();
    document.getElementById("usedTime").innerHTML = time2 - time1 + "ms";
    document.getElementById("dotsNum").innerHTML = countDots + "";
    infoButton();
    calcButton();
}

//呈现图表卡片
//功能按钮
function returenButton() {
    window.location.reload();
    scrollTo(0, 0);
}

function infoButton() {
    document.getElementById("idOfInfo").style.display = "block";
}

function calcButton() {
    function AnsNode(val, id, n, pv) {
        this.val = val;
        this.id = id;
        this.n = n;
        this.pv = pv;
    }

    function compareNode(property) {
        return function (a, b) {
            if (a["n"] <= 2) return 10000000.0;
            if (b["n"] <= 2) return -10000000.0;
            const value1 = (a[property]);
            const value2 = (b[property]);
            return value2 - value1;
        };
    }

    let ans = [];

    myDate = new Date();
    time1 = myDate.getTime();


    for (let i = 0; i < co.length; i += 2) {
        let x = co[i];
        let y = co[i + 1];
        let sum_x = 0;
        let sum_y = 0;
        let sum_xy = 0;
        let sum_xx = 0;
        let sum_yy = 0;
        let n = x.length - 1;
        for (let j = 1; j < x.length; j++) {
            sum_x += x[j];
            sum_y += y[j];
            sum_xx += x[j] * x[j];
            sum_xy += x[j] * y[j];
            sum_yy += y[j] * y[j];
        }
        let t_ans = n * sum_xy - sum_x * sum_y;
        t_ans /= Math.sqrt(n * sum_xx - sum_x * sum_x);
        t_ans /= Math.sqrt(n * sum_yy - sum_y * sum_y);
        ans.push(new AnsNode(t_ans, x[0], n));
    }
    //---all---
    {
        let sum_x = 0;
        let sum_y = 0;
        let sum_xy = 0;
        let sum_xx = 0;
        let sum_yy = 0;
        let n = 0;
        for (let i = 0; i < co.length; i += 2) {
            let x = co[i];
            let y = co[i + 1];
            n += x.length - 1;
            for (let j = 1; j < x.length; j++) {
                sum_x += x[j];
                sum_y += y[j];
                sum_xx += x[j] * x[j];
                sum_xy += x[j] * y[j];
                sum_yy += y[j] * y[j];
            }
        }
        let t_ans = n * sum_xy - sum_x * sum_y;
        t_ans /= Math.sqrt(n * sum_xx - sum_x * sum_x);
        t_ans /= Math.sqrt(n * sum_yy - sum_y * sum_y);
        ans.push(new AnsNode(t_ans, "总计", n));
    }
    //---------


    for (let i = 0; i < ans.length; i++) {
        if (ans[i].n <= 2) continue;
        const t = ans[i];
        // console.log(t.val);
        // console.log(t.n);
        // console.log((t.n - 2) / (1 - t.val * t.val));
        let r = t.val;
        let n = t.n;
        let df = n - 2;
        let tv = r * Math.sqrt((n - 2) / (1 - (r * r)));
        ans[i].pv = p_value(tv, df);
    }


    ans = ans.sort(compareNode("pv"));
    myDate = new Date();
    time2 = myDate.getTime();

    if (ans.length > 0) {
        document.getElementById("idOfRelat").innerHTML +=
            "<br>* 计算用时: " + (time2 - time1) + "ms";
        document.getElementById("tableOfR").innerHTML +=
            "<tr><td>category</td><td>点数</td><td>相关系数</td><td>P值</td>";
    }

    for (const p in ans) {
        let tableItem = "<tr>";
        tableItem += "<td> " + ans[p].id + " </td>";
        tableItem += "<td> " + ans[p].n + " </td>";
        if (ans[p].n <= 2) {
            tableItem += "<td>数据量不足</td><td>数据量不足</td>";
        } else {
            tableItem += "<td> " + ans[p].val.toFixed(8) + " </td>";
            tableItem += "<td> " + ans[p].pv.toExponential(6) + " </td>";    //科学记数法
        }
        tableItem += "</tr>";
        document.getElementById("tableOfR").innerHTML += tableItem;
    }

    document.getElementById("idOfRelat").style.display = "block";
    //console.log(ans.sort(compareNode("val")));
}

function hideAllButton() {
    chart.hide();
}

function dispAllButton() {
    chart.show();
}
