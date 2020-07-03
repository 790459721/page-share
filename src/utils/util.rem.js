const setRem = function (pwidth,prem){
    const html = document.getElementsByTagName("html")[0];
    const oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
  }
  
  module.exports = setRem