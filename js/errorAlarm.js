/**
 * 在输入异常时，在网页回显错误报告。
 * @param {int} n - 错误编号。
 * @param {int} x - 数据出现错误的位置（行号）。
 */
function displayErrorCode(n, x) {
    let text = "<div class='errorSignal' >";

    switch (n) {
        case 1:
            text += "错误01：缺少文件g1";
            break;
        case 2:
            text += "错误02：缺少文件g2";
            break;
        case 3:
            text += "错误03：文件存在类型错误或未选择";
            break;
        case 4:
            text += "错误04：文件g1是空文件";
            break;
        case 5:
            text += "错误05：文件g2是空文件";
            break;
        case 6:
            text += "错误06：文件g1存在数据错误于" + x;
            break;
        case 7:
            text += "错误07：文件g2存在数据错误于" + x;
            break;
        case 8:
            text += "错误08：发现info文件被当作g1上传";
            break;
        case 9:
            text += "错误09：发现info文件被当作g2上传";
            break;
    }
    text += "</div>";
    $("#popInfoBox").prepend(text).show();

    let dt = 100;   // delay time，表示延迟存在的时间
    let ft = 3000;  // fade time，表示渐变消失的时间
    tg = $(".errorSignal");
    tg.delay(dt).fadeOut(ft);
    setTimeout(function () {//提示完成以后关闭
        tg.remove();
    }, dt + ft);
}

function displaySuccess() {
    let text = "<div class='successSignal' >散点图绘制成功！</div>";

    $("#popInfoBox").prepend(text).show();

    let dt = 100, ft = 3000, tg = $(".successSignal");
    tg.delay(dt).fadeOut(ft);
    setTimeout(function () {//提示完成以后关闭
        tg.remove();
    }, dt + ft);
}

function isNotANumber(inputData) {
    //isNaN(inputData)不能判断空串或一个空格
    //如果是一个空串或是一个空格，而isNaN是做为数字0进行处理的，而parseInt与parseFloat是返回一个错误消息，这个isNaN检查不严密而导致的。
    //console.log(parseFloat(inputData));
    return parseFloat(inputData).toString() === "NaN";
}
