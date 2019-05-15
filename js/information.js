document.body.submit('touchstart', function () { });//确保active可用
//引用Fastclick
if ('submitbtn' in document) {
    document.submit('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
// var attachFastClick = require('fastclick');
// attachFastClick(document.body);
//
// var xmlhttp;
// if (window.XMLHttpRequest)
// {
//     //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//     xmlhttp=new XMLHttpRequest();
// }
// else
// {
//     // IE6, IE5 浏览器执行代码
//     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// }



var message=false,nameInput=false,genderInput=false,schoolInput=false,numberInput=false,phoneInput=false;
function buttonclick() {
    var submitBtnChange = document.getElementById("submitbutton")
    submitBtnChange.style.background = "#ff99cc";
}
function buttonsubmit() {
    var submitBtnChange = document.getElementById("submitbutton")
    submitBtnChange.style.background = "#FFB6C1";
    // 提交信息时的判断
    message=confirm("确定要提交信息进行心理预约吗？")
    if (message==true)
    {
        if (nameInput==true&&genderInput==true&&schoolInput==true&&numberInput==true&&phoneInput==true)
        {
            alert("信息提交成功！");
        }
        else
        {
            alert("信息填写不完整！");
        }
    }
}

function Name() {
    nameInput=true;
}
function Sex() {
    genderInput=true;
}
function School() {
    schoolInput=true;
}
function Number() {
    numberInput=true;
}
function Phone() {
    phoneInput=true;
}