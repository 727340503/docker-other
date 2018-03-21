var iosUrl = "https://itunes.apple.com/us/app/sitck-n-collect/id1281406704?ls=1&mt=8";//ios download link
var aosUrl = "http://play.google.com/store/apps/details?id=com.tcc.rustans";//aos download link

var is_weixin = (function() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
})();
$(document).ready(function() {
    setTimeout(function() {
        var clientHeight = $('.fgs-download').height();
        $('.ios-url').attr('href', iosUrl);
        $('.aos-url').attr('href', aosUrl);
        if($(window).height()>clientHeight+150){
            $('.background').height($(window).height());
        }else{
            $('.background').height(clientHeight +150 );
        }
        if (is_weixin) {
            $('.wechat-reminder').removeClass('hide');
            $('.fgs-download').height(clientHeight);
            $('.fgs-download').addClass('no-scroll');
        } else if (deviceDetection.device == 'Android') {
            window.location = aosUrl
        } else if (deviceDetection.device == 'iPhone') {
            window.location = iosUrl
        }

    }, 100);
})
window.onresize = function () {
    var clientHeight = $('.fgs-download').height();
    if (true) {
        if($(window).height()>clientHeight +150){
            $('.background').height($(window).height());
        }else{
            $('.background').height(clientHeight + 150 );
        }
    }
    
}