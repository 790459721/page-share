/*
 * @Author: zhangxr
 * @Date: 2020-07-10 15:02:09
 * @Description: 
 */ 
 const isWeixin = function () { //判断是否是微信
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
};
export {
    isWeixin
}