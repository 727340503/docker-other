function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
var maxNameLen=5;//我的好友或群组列表中名称显示最大长度

var pageSize = 10;//表格的每页条数，分页时用到
var totalCount = 1000;//每次接口请求的条数，分页时用到
var MaxMsgLen={//消息最大长度（字节），
    'C2C':12000,//私聊消息
    'GROUP':8898//群聊
};
var SessionType={ //聊天类型，C2C : 私聊，GROUP：群聊
    'C2C':'C2C',
    'GROUP':'GROUP'
};
var selType = SessionType.GROUP;//当前聊天类型

var selToID = null;//当前选中聊天id（当聊天类型为私聊时，该值为好友帐号，否则为群号）
var selSess = null;//当前聊天会话
var curMsgCount = 0;//当前聊天会话中的消息数
var emotionFlag = false;//是否打开过表情选择框

var UploadPicBussinessType={//图片业务类型
    'GROUP_MSG':1,//私聊图片
    'C2C_MSG':2,//群聊图片
    'USER_HEAD':3,//用户头像
    'GROUP_HEAD':4//群头像
};

var curPlayAudio=null;//当前正在播放的audio对象


//腾讯登录服务错误码（用于托管模式）
var TlsErrorCode={
    'OK':0,//成功
    'SIGNATURE_EXPIRATION':11//用户身份凭证过期
};
//默认好友头像
var friendHeadUrl = 'images/2017.jpg';




var listeners = {
    "onConnNotify": null,
    "jsonpCallback": jsonpCallback,//IE9(含)以下浏览器用到的jsonp回调函数
    "onMsgNotify": onMsgNotify//监听新消息(私聊，群聊，群提示消息)事件
    //"onGroupInfoChangeNotify": onGroupInfoChangeNotify,//监听群资料变化事件
    //"groupSystemNotifys": groupSystemNotifys//监听（多终端同步）群系统消息事件
};
//IE9(含)以下浏览器用到的jsonp回调函数
function jsonpCallback(rspData) {
    webim.setJsonpLastRspData(rspData);
}
//监听新消息事件
function onMsgNotify(newMsg) {
    //获取所有聊天会话
    var sessMap = webim.MsgStore.sessMap();
    for (var i in sessMap) {
        var sess = sessMap[i];
        if (selToID == sess.id()) {//处于当前聊天界面
            selSess = sess;
            //获取当前会话消息数
            var msgCount = sess.msgCount();
            // add new msgs
            if (msgCount > curMsgCount) {

                for (var j = curMsgCount; j < msgCount; j++) {
                    var msg = sess.msg(j);
                    //在聊天窗体中新增一条消息
                    addMsg(msg);
                    curMsgCount++;
                }
                //消息已读上报，以及设置会话自动已读标记
                webim.setAutoRead(selSess, true, true);
            }
        } else {
            //更新其他聊天对象的未读消息数
            // updateSessDiv(sess.type(),sess.id(), sess.unread());
        }

    }
}
//获取我的群组列表回调函数
function getGroupsCallbackOK() {
    selType == SessionType.GROUP && getGroupInfo(selToID, function (resp) {
        //拉取最新消息
        var opts = {
            'GroupId': selToID,
            'ReqMsgSeq': resp.GroupInfo[0].NextMsgSeq - 1,
            'ReqMsgNumber': 100
        };
        if (opts.ReqMsgSeq == null || opts.ReqMsgSeq == undefined) {
            alert('群消息序列号非法');
            return;
        }
        webim.syncGroupMsgs(opts, syncMsgsCallbackOK);
    });
}

//获取C2C最新消息或群漫游消息成功回调函数
function syncMsgsCallbackOK() {

    if (webim.MsgStore.sessCount() > 0) {

        var sessMap = webim.MsgStore.sessMap();
        for (var i in sessMap) {
            //console.info("sessMap[i]=%O",sessMap[i]);
            var sess = sessMap[i];
            if (selToID == sess.id()) {//处于当前聊天界面
                selSess = sess;

                var msgCount = sess.msgCount();
                // add new msgs
                if (msgCount > curMsgCount) {

                    for (var mj = curMsgCount; mj < msgCount; mj++) {
                        var msg = sess.msg(mj);
                        addMsg(msg);
                        curMsgCount++;
                    }
                    //消息已读上报，以及设置会话自动已读标记
                    webim.setAutoRead(selSess, true, true);
                }
            } else {
                //更新其他聊天对象的未读消息数
                // updateSessDiv(sess.type(),sess.id(), sess.unread());
            }

        }
    }
}
var merchantName='';
var merchantLogo='';
var userImg=''
function addMsg(msg) {
    var tpl = !msg.isSend ? "#message-response-template" : "#message-template";
    var template = Handlebars.compile( $(tpl).html());
    var imgUrl=!msg.isSend ? merchantLogo : userImg;
    var context = {
        messageOutput: msg.toHtml(),
        response: msg.toHtml(),
        time: webim.Tool.formatTimeStamp(msg.time),
        name:merchantName,
        imgUrl:imgUrl
    };
    $chatHistory = $('.chat-history');
    $chatHistoryList = $chatHistory.find('ul');
    $chatHistoryList.append(template(context));
    $chatHistory.scrollTop($chatHistory[0].scrollHeight);
}