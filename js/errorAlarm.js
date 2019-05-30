function displayErrorCode(n) {
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


