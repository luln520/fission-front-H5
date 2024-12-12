// 获取Chrome浏览器内核版本号
function getChromeVersion() {
    var userAgent = navigator.userAgent;
    var chromeVersion = "";
    if (userAgent.indexOf("Chrome") !== -1) {
        chromeVersion = userAgent.match(/Chrome\/(\d+)/)[1];
    } else {
        chromeVersion = "";
    }
    return chromeVersion.trim();
}

var chromeVersion = getChromeVersion();
//66内核后才能正常访问
if (chromeVersion && chromeVersion <= 65) {
    alert("The browser kernel version is too low, please download the latest browser!");
    window.location.href = "https://play.google.com/store/apps/details?id=com.android.chrome";
} else {
    console.info(chromeVersion);
}
