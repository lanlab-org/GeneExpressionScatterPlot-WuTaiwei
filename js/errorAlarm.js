function displayErrorCode(n) {
    let text = "<div class='errorSignal' >";

    switch (n) {
        case 1:
            text += "错误01：缺少文件g1";
            break;
        case 2:
            text += "错误02：缺少文件g2";
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
    //$('.errorSignal').show().delay(3000).fadeOut();
}

//displayErrorCode(1)


