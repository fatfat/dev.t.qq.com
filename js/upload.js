var common = {
	"config":{
		"port":"80",
		"userdata":(function(){return +(Math.round(Math.random() * 10000).toString() + new Date().getMilliseconds());})()
	},
	"cookie":{
		"get":function(name){
			var arr = document.cookie.match(new RegExp("\\b"+name+"\\b=([^=;\s]*)?","g"));
				return arr && arr[1];
		}
	},
	"genFileId":function(){
		return +(Math.round(Math.random() * 10000).toString() + new Date().getMilliseconds());
	},
	"initPlugin":function() {
		var hasPlugin = function(){
			var p;
			if(_isSupportActiveX()) {
				try {
					new ActiveXObject('TXFTNActiveX.FTNUpload');
				} catch(e) {
					return false;
				}
			} else {
				p = navigator.plugins['Tencent FTN plug-in']; 
				if(!p || _isFF() && (p[0].type != 'application/txftn' && p[0].type != 'application/txftn-webkit') || !_isFF() && p[0].type != 'application/txftn-webkit') {
					return false;
				}
				_pluginType = p[0].type;
			}
			return true;
		};
		
		if(_plugin) {
			return 0;
		}
		if(!hasPlugin()) {
			return 1;
		}
		if(_isSupportActiveX()) {
			_plugin = new ActiveXObject('TXFTNActiveX.FTNUpload');
		} else {
			_plugin = document.createElement('embed');
			_plugin.width = 0;
			_plugin.height = 0;
			_plugin.type = _pluginType;
			_plugin = document.body.appendChild(_plugin);
		}
		_plugin.OnEvent = common.OnEventHandler;
		_plugin.RetryTime = 20;
		_plugin.BlockSize = 128 * 1024;
		_plugin.TimeOut = 90 * 1000;
		_plugin.BreakSize = 64 * 1024;
		_plugin.MaxConcurrentUploadNum = 3;
		return 0;
	},
	"OnEventHandler":function(EventParam){
			if (_plugin.UserDatabyLocalID(EventParam.LocalID) == 9226)
			{
				//OnEventHandler_all(EventParam);
				return;
			}
		var fun=[
			function(){},//0
			function(){
				var script = document.getElementById("tempscript");
				common.config.Path = EventParam.Path;
				common.config.FileSize = EventParam.FileSize;
				common.config.Processed = EventParam.Processed;
				common.config.userdata = _plugin.UserDatabyLocalID(EventParam.LocalID);
				common.config.sha = EventParam.SHA;
				common.config.md5 = EventParam.Md5;
				common.config.fileSize = EventParam.FileSize;
				if (EventParam.FileSize>104857600){
					common.setMsg("文件大小请控制在100M以内",2);
					return false;
				}
				if (!script){
					script = document.createElement("script");
					script.type="text/javascript";
					document.getElementsByTagName("head")[0].appendChild(script);
				}
				script.src="http://open.t.qq.com/api/file/upload_file?filesize="
						+ EventParam.FileSize+"&shahash="
						+ EventParam.SHA+"&md5="
						+ EventParam.Md5+"&filename="
						+ EventParam.Path+"&createtime=1363868150&modifytime=1363868150&format=common.uploadFile&t="+(+new Date());
				common.setMsg("成功获取签名信息，开始创建文件...",0);
			},//1
			function(){
				common.setMsg("正在获取文件签名信息...",0);
				common.setUploadProgress(EventParam.Processed/EventParam.FileSize);
			},//2
			function(){
				if (EventParam.ErrorCode !== 0 || EventParam.Step !== 0) {
					common.setMsg("上传失败",2);
					frameElement.callback({"ret":1,"path":""});
				}else{
					common.setMsg('上传成功,<a href="http://app.t.qq.com/download.php?key='+(common.config.filekey.slice(1))+'&name='+encodeURIComponent(common.config.filename)+'" target="_blank">点击下载</a>',1);
					common.setUploadProgress(1);
					if (frameElement.callback){
						frameElement.callback({"ret":0,"msg":"上传成功","data":{"filename":common.config.filename,"filekey":common.config.filekey.slice(1),"filesize":common.config.fileSize}});
					}
				}
			},//3
			function(){
				common.setMsg("正在上传文件...",0);
				common.setUploadProgress(EventParam.Processed/EventParam.FileSize);
			},//4
			function(){
				
			}//5
		][+EventParam.EventType];
		fun();
	},
	"selectFile":function(){
		var files;
		if (_plugin){
			files = _plugin.SelectFiles(window).split(/[\s\r\n]+/g);
			return files[0];
		}else{
			common.setMsg('您需要安装上传控件才能进行上传，点击此处 <a href="http://mail.qq.com/cgi-bin/readtemplate?t=browser_addon&check=false&returnto='+encodeURIComponent(top.location.href)+'" onclick="return common.installActive();">安装上传控件</a>',2);
			return false;	
		}		
	},
	"getFileInfo":function(){
		var filename;
		common.config.file = common.selectFile();
		filename = common.config.file.match(/([^\\]+$)/);

		if (common.config.file){
			if (/\.apk$/.test(common.config.file) === false){
				common.setMsg("仅支持apk安装包！",2);
				return false;
			}
			common.config.filename = filename && filename[1];
			common.setUploadProgress(0);
			$("upload_txt").value=common.config.file;
			$("progress").className="";
			var LocalID = _plugin.FileSign(common.config.file,855);
		}
	},
	"uploadFile":function(d){
		if (d.ret === 0){
			d.path = (function(path) {
				var tmp = path.split('/');
					tmp[1] = tmp && tmp[1] && tmp[1].substr(0, 36);
				return tmp.join('/');
			})(d.path);
			common.config.filekey = d.path;
			var LocalID = _plugin.UploadFile(d.ip,d.port||80,d.checkkey,common.config.sha,d.path,common.config.Path,853);
			common.setMsg("创建文件成功，开始上传...",0);
		}else{
			if (d.errcode === 3){
				common.setMsg("您还没有登录，请先登录",2);
			}else{
				common.setMsg("创建文件失败，"+d.msg,2);
			}
		}
	},
	"init":function(){
		common.getFileInfo();
	},
	"setUploadProgress":function(k){
		var p1=$("progress"),p2=$("progress_bar"),pt=$("progress_bar_percent"),w=p1.clientWidth;
		p2.style.width=(k*100)+"%";
		pt.innerHTML = Math.ceil(k*100)+"%";
		if (k>0.06){
			pt.className="start";
		}else{
			pt.className="";
		}
	},
	"setMsg":function(text,ret){
		var panel = $("panel");
			ret = ret || 0;
		panel.className = ["","yes","no"][ret];
		panel.innerHTML = text;
	},
	"installActive":function(){
		frameElement.width="100%";
		frameElement.height=450;
		parent.ptlogin2_onResize(960,450);
	}
};

var _plugin = null;

function _isSupportActiveX() {
	return !(typeof ActiveXObject == 'undefined');
};
function _isFF() {
	return navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
};
function $(a){
	return document.getElementById(a);
}
window.onload = function(){
	common.initPlugin();
	$("upload_btn").onclick = common.init;
	if (!(window.console && window.console.log)){
		var log = document.getElementById("console");
		window.console = {
			"log":function(txt){
				log.value +=txt+"\n";
			},
			"dir":function(txt){
				log.value +=txt+"\n";
			},
			"clear":function(){
				log.value = "";
			}
		};
	}
}