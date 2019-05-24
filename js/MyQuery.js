let check1 = 0;
let check2 = 0;
let check3 = 0;
let d1name;
let d2name;
let infoname;

$(document).ready(function () {
    $('#data1_Button').click(function () {
        return $('#data1').click();
    });
    $('#data2_Button').click(function () {
        return $('#data2').click();
    });
    $('#data3_Button').click(function () {
        return $('#data3').click();
    });
    $('#sub_Button').click(function () {
        return $('#sub').click();
    });
    $('#raButton').click(function () {
        if(this.getAttribute("value")==="隐藏相关系数"){
            this.setAttribute("value","显示相关系数");
            $('#idOfRelat').css("display","none");
        }else{
            this.setAttribute("value","隐藏相关系数");
            $('#idOfRelat').css("display","block");
        }
    });
    $('#ioButton').click(function () {
        if(this.getAttribute("value")==="隐藏单点信息"){
            this.setAttribute("value","显示单点信息");
            $('#idOfInfo').css("display","none");
        }else{
            this.setAttribute("value","隐藏单点信息");
            $('#idOfInfo').css("display","block");
        }
    });
    $("#data1").change(function () {
        //console.log("Yes");
        const filePath = $(this).val();
        if (filePath.indexOf("json") !== -1) {
            const arr = filePath.split('\\');
            const fileName = arr[arr.length - 1];
            d1name = fileName;
            check1 = 1;
            const idp=$("#data1_Button");
            idp.css("background-color", "rgba(100,200,100,0.05)");
            idp.css("color", "rgba(100,200,100,1.00)");
            idp.css("border-color", "rgba(100,200,100,1.00)");
            idp.html(fileName);
        } else {
            check1 = -1;
            const idp=$('#data2_Button');
            idp.html("未选择或类型有误！");
            idp.css("background-color", "rgba(200,100,100,0.05)");
            idp.css("color", "rgba(200,100,100,1.00)");
            idp.css("border-color", "rgba(200,100,100,1.00)");
            return false;
        }
    });
    $("#data2").change(function () {
        //console.log("Yes");
        const filePath = $(this).val();
        if (filePath.indexOf("json") !== -1) {
            const arr = filePath.split('\\');
            const fileName = arr[arr.length - 1];
            d2name = fileName;
            check2 = 1;
            const idp=$("#data2_Button");
            idp.css("background-color", "rgba(100,200,100,0.05)");
            idp.css("color", "rgba(100,200,100,1.00)");
            idp.css("border-color", "rgba(100,200,100,1.00)");
            idp.html(fileName);
        } else {
            check2 = -1;

            const idp=$("#data2_Button");
            idp.html("未选择或类型有误！");
            idp.css("background-color", "rgba(200,100,100,0.05)");
            idp.css("color", "rgba(200,100,100,1.00)");
            idp.css("border-color", "rgba(200,100,100,1.00)");
            return false;
        }
    });
    $("#data3").change(function () {
        //console.log("Yes");
        const filePath = $(this).val();
        if (filePath.indexOf("json") !== -1) {
            const arr = filePath.split('\\');
            const fileName = arr[arr.length - 1];
            infoname = fileName;
            check3 = 1;
            const idp=$("#data3_Button");
            idp.css("background-color", "rgba(100,200,100,0.05)");
            idp.css("color", "rgba(100,200,100,1.00)");
            idp.css("border-color", "rgba(100,200,100,1.00)");
            idp.html(fileName);
        } else {
            if(filePath.length>=0)check3 = -1;
            else check3 = 0;
            const idp=$("#data3_Button");
            idp.html("未选择或类型有误！");
            idp.css("background-color", "rgba(200,100,100,0.05)");
            idp.css("color", "rgba(200,100,100,1.00)");
            idp.css("border-color", "rgba(200,100,100,1.00)");
            return false;
        }
    });
});