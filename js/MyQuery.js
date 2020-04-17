let check1 = 0;
let check2 = 0;
let check3 = 0;
let d1name;
let d2name;
let infoname;

$(document).ready(function () {
  $('#raButton').click(function () {
    if (this.getAttribute("value") === "隐藏相关系数") {
      this.setAttribute("value", "显示相关系数");
      $('#idOfRelat').css("display", "none");
    } else {
      this.setAttribute("value", "隐藏相关系数");
      $('#idOfRelat').css("display", "block");
    }
  });
  $('#ioButton').click(function () {
    if (this.getAttribute("value") === "隐藏单点信息") {
      this.setAttribute("value", "显示单点信息");
      $('#idOfInfo').css("display", "none");
    } else {
      this.setAttribute("value", "隐藏单点信息");
      $('#idOfInfo').css("display", "block");
    }
  });

  function renderValid(obj, str) {
    obj.css("background-color", "rgba(100,200,100,0.05)");
    obj.css("color", "rgba(100,200,100,1.00)");
    obj.css("border-color", "rgba(100,200,100,1.00)");
    obj.html(str);
  }

  function renderInvalid(obj) {
    obj.css("background-color", "rgba(200,100,100,0.05)");
    obj.css("color", "rgba(200,100,100,1.00)");
    obj.css("border-color", "rgba(200,100,100,1.00)");
    obj.html("未选择或类型有误！");
  }

  $("#data1").change(function () {
    //console.log("Yes");
    const filePath = $(this).val();
    if (filePath.indexOf("json") !== -1) {
      const arr = filePath.split('\\');
      d1name = arr[arr.length - 1];
      check1 = 1;
      renderValid($("#data1_Button"), d1name);
    } else {
      check1 = -1;
      renderInvalid($('#data2_Button'));
      return false;
    }
  });
  $("#data2").change(function () {
    //console.log("Yes");
    const filePath = $(this).val();
    if (filePath.indexOf("json") !== -1) {
      const arr = filePath.split('\\');
      d2name = arr[arr.length - 1];
      check2 = 1;
      renderValid($("#data2_Button"), d2name);
    } else {
      check2 = -1;
      renderInvalid($("#data2_Button"));
      return false;
    }
  });
  $("#data3").change(function () {
    //console.log("Yes");
    const filePath = $(this).val();
    if (filePath.indexOf("json") !== -1) {
      const arr = filePath.split('\\');
      infoname = arr[arr.length - 1];
      check3 = 1;
      renderValid($("#data3_Button"), infoname);
    } else {
      if (filePath.length >= 0) check3 = -1;
      else check3 = 0;
      renderInvalid($("#data3_Button"));
      return false;
    }
  });
});