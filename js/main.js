/*
* @Author: 71764
* @Date:   2017-08-21 17:33:39
* @Last Modified by:   71764
* @Last Modified time: 2017-08-22 15:31:52
*/
var wechat = document.getElementById("wechat");
var QQ = document.getElementById("QQ");
var QRimg = document.getElementById("QRimg");
var QRcode = document.getElementById("QR-code");

wechat.onmouseover=function(){
    QRimg.setAttribute('src','images/wechatQR.jpg');
    QRcode.style.borderColor = 'green';
}
QQ.onmouseover=function(){
    QRimg.setAttribute('src','images/QQQR.jpg');
    QRcode.style.borderColor = 'blue';
}