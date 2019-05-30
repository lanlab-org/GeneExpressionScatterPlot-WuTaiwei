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
    }
    text += "</div>";
    $("#popInfoBox").prepend(text).show();
    $(function () {
        $(".errorSignal").click(function () {
            this.delay(1000);
        });
    });

    let dt = 100, ft = 3000, tg = $(".errorSignal");
    tg.delay(dt).fadeOut(ft);
    setTimeout(function () {//提示完成以后关闭
        tg.remove();
    }, dt + ft);
}

function isNotANumber(inputData) {
    //isNaN(inputData)不能判断空串或一个空格
    //如果是一个空串或是一个空格，而isNaN是做为数字0进行处理的，而parseInt与parseFloat是返回一个错误消息，这个isNaN检查不严密而导致的。
    return parseFloat(inputData).toString() !== "NaN";
}
