// 判断浏览器环境函数
window.isInMobile = function (){
  if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return true; // 移动端
  }else{
    return false; // PC端
  }
}

/**
 * 判断是否是微信环境
 */
window.isInWeiXinApp = function() {
  return /MicroMessenger/.test(window.navigator.userAgent);
};
