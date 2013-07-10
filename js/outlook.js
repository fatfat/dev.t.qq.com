tpl.outlook = [
'On Error Resume Next',

'   Dim strSigName',
'   Dim boolUpdateStyle',

'\'==========================================================================',
'\' 设置签名参数',
'\'==========================================================================',
'   strSigName  = decodeStr("-13094|-11850|-12638|-19799|-14423|-15365|-19019")',
'   boolUpdateStyle = true',
'\'==========================================================================',
'\' 获取签名路径',
'\'==========================================================================',
'   Dim objShell',
'   Set objShell = CreateObject("WScript.Shell")',
'   objShell.RegWrite "HKEY_CURRENT_USER\\Software\\Microsoft\\Office\\11.0\\Common\\General\\Signatures" , "Signatures"',
'   strSigFolder = ObjShell.ExpandEnvironmentStrings("%appdata%") & "\\Microsoft\\Signatures\\"',
'   HTMFileString = strSigFolder & strSigName',
'   Set objShell = Nothing',

'\'==========================================================================',
'\' 获取签名路径',
'\'==========================================================================',
'   Dim objFSO, objFile',
'   Set objFSO   = CreateObject("Scripting.FileSystemObject")',

'   If Not (objFSO.FolderExists(strSigFolder)) Then',
'      Call objFSO.CreateFolder(strSigFolder)',
'   End If',

'   strHTMFile = strSigFolder & strSigName & ".htm"',
'\'==========================================================================',
'\' 设置签名内容',
'\'==========================================================================',
'   Err.Clear',
'   Set objFile = objFSO.CreateTextFile(strHTMFile, boolUpdateStyle, False)',
'   If Err.Number = 0 Then',
'      objFile.Write "<html> <head> <title>"&strSigName&"</title> </head> <body>"&vbCrLf',
'      objFile.Write "<p><span style=""font-size: 10pt; color:#1F497D; font-family: Calibri;line-height:18px;"">"&vbCrLf',
'   Dim objSysInfo, objUser',
'   Set objSysInfo = CreateObject("ADSystemInfo")',
'   Set objUser    = GetObject("LDAP://" & objSysInfo.Username)',
'      if objUser.Company<>"" then objFile.Write objUser.Company & "<br/>"',
'   	  if objUser.FullName<>"" then objFile.Write objUser.FullName', 
'   	  if objUser.title<>"" then objFile.Write " <font color=""gray"">" & objUser.title & "</font>"', 
'   	  objFile.Write "<br/>"',
'   	  if objUser.faxNumber<>"" then objFile.Write "Fax:" & objUser.faxNumber & "<br/>"',
'   	  if objUser.homePhone<>"" then objFile.Write "Tel:" & objUser.homePhone & "<br/>"',
'   	  if objUser.postalCode<>"" then objFile.Write "postalCode:" & objUser.postalCode & "<br/>"',
'   	  if objUser.streetAddress<>"" then objFile.Write "Adr:" & objUser.streetAddress & "<br/>"',
'   	  if objUser.telephoneNumber<>"" then objFile.Write "Phone:" & objUser.telephoneNumber & "<br/>"',
'   	  if objUser.emailaddress<>"" then objFile.Write "Email:<a href=""mailto:" & objUser.emailaddress & """ style=""font-size: 10pt; color:#090;font-family: Calibri"">" & objUser.emailaddress & "</a><br/>"',
'   	  if objUser.Description<>"" then objFile.Write "Des:" & objUser.Description & "<br/>"',
'   	  objFile.Write "<a href=""http://t.qq.com/<!--{$userInfo.name}-->""><img src=""http://v.t.qq.com/sign/<!--{$userInfo.name}-->/<!--{$userInfo.sign}-->/_colorIndex_.jpg"" border=""0"" width=""380"" height=""100""/></a>"',
'   	  objFile.Write "<br/><a href=""http://open.t.qq.com/websites/sign?explain=1"" target=""_blank"">"+decodeStr("-12590|-11598|-12309|-11046|-12590|-19004|-11318|-12316|-10544|-13639|-11325|-13094|-11850|-12638|-19799|-14423|-15365|-19019")+"</a>"',
'   	  objFile.Write "</span></p>"',
'      objFile.Write "</body></html>"',
'      objFile.close',
'      Set objUser    = Nothing',
'   	  Set objSysInfo = Nothing',
'   End If',

'\'==========================================================================',
'\' 清空对象',
'\'==========================================================================',
'   set objFile = Nothing',
'   set objFSO  = Nothing',
'   Call SetDefaultSignature(strSigName,"")',

'Sub SetDefaultSignature(strSigName, strProfile)',
'Const HKEY_CURRENT_USER = &H80000001',
'Const SUCCESS_STR="-19511|-18010|-19276|-16984|-13094|-11850|-12638|-19799|-14423|-15365|-19019|-23622"',
'strComputer = "."',
'Set objreg = GetObject("winmgmts:{impersonationLevel=impersonate}!\\\\" & strComputer & "\\root\\default:StdRegProv")',
'strKeyPath = "Software\\Microsoft\\Windows NT\\CurrentVersion\\Windows Messaging Subsystem\\Profiles\\"',
'If strProfile = "" Then',
'objreg.GetStringValue HKEY_CURRENT_USER, strKeyPath, "DefaultProfile", strProfile',
'End If',
'myArray = StringToByteArray(strSigName, True)',
'strKeyPath = strKeyPath & strProfile & "\\9375CFF0413111d3B88A00104B2A6676"',
'objreg.EnumKey HKEY_CURRENT_USER, strKeyPath, arrProfileKeys',
'For Each subkey In arrProfileKeys',
'strsubkeypath = strKeyPath & "\\" & subkey',
'objreg.SetBinaryValue HKEY_CURRENT_USER, strsubkeypath, "New Signature", myArray',
'objreg.SetBinaryValue HKEY_CURRENT_USER, strsubkeypath, "Reply-Forward Signature", myArray',
'Next',
'If Not IsOutlookRunning Then',
'Msgbox decodeStr(SUCCESS_STR)&strSigName&"",vbExclamation,"SetDefaultSignature"',
'Else',
'strMsg = decodeStr(SUCCESS_STR) & vbCrLf & strSigName & vbCrLf & decodeStr("-14357|-13610|-18769|-10536|-12094|-14604|-18769|-15110|-19004") & "Outook"',
'MsgBox strMsg, vbExclamation, "SetDefaultSignature"',
'End If',
'End Sub',

'Function IsOutlookRunning()',
'strComputer = "."',
'strQuery = "Select * from Win32_Process " & _',
'"Where Name = \'Outlook.exe\'"',
'Set objWMIService = GetObject("winmgmts:" _',
'& "{impersonationLevel=impersonate}!\\\\" _',
'& strComputer & "\\root\\cimv2")',
'Set colProcesses = objWMIService.ExecQuery(strQuery)',
'For Each objProcess In colProcesses',
'If UCase(objProcess.Name) = "OUTLOOK.EXE" Then',
'IsOutlookRunning = True',
'Else',
'IsOutlookRunning = False',
'End If',
'Next',
'End Function',

'Public Function StringToByteArray _',
'(Data, NeedNullTerminator)',
'Dim strAll',
'strAll = StringToHex4(Data)',
'If NeedNullTerminator Then',
'strAll = strAll & "0000"',
'End If',
'intLen = Len(strAll) \\ 2',
'ReDim arr(intLen - 1)',
'For i = 1 To Len(strAll) \\ 2',
'arr(i - 1) = CByte _',
'("&H" & Mid(strAll, (2 * i) - 1, 2))',
'Next',
'StringToByteArray = arr',
'End Function',

'Public Function StringToHex4(Data)',
'Dim strAll',
'For i = 1 To Len(Data)',
'strChar = Mid(Data, i, 1)',
'strTemp = Right("00" & Hex(AscW(strChar)), 4)',
'strAll = strAll & Right(strTemp, 2) & Left(strTemp, 2)',
'Next',
'StringToHex4 = strAll',
'End Function',

'Function decodeStr(str)',
'	Dim arr',
'	Dim arr2',
'	arr=Split(str,"|")',
'	Redim arr2(Ubound(arr))',
'	For i=0 to Ubound(arr)',
'	arr2(i)=Chr(arr(i))',
'	Next',
'	decodeStr=Join(arr2,"")',
'End Function',
].join("\r");

tpl.foxmail = [
'On Error Resume Next',

'   Dim strSigName',
'   Dim boolUpdateStyle',

'\'==========================================================================',
'\' 设置签名参数',
'\'==========================================================================',
'   strSigName  = decodeStr("-13094|-11850|-12638|-19799|-14423|-15365|-19019")',
'   boolUpdateStyle = true',
'\'==========================================================================',
'\' 获取签名路径',
'\'==========================================================================',
'   Dim objShell,installpath,installversion,sigpath,fso,sigfile,regpath,version1,version2',
'   Set objShell =CreateObject("WScript.Shell")',
'   Set fso = CreateObject("Scripting.FileSystemObject")',
'   regpath = "HKEY_CURRENT_USER\\Software\\Aerofox\\"',
'   version1 = objShell.RegRead(regpath+"Foxmail\\version")',
'   version2 = objShell.RegRead(regpath+"FoxmailPreview\\version")',
'   if (version1="") then version1="0.0.0.0"',
'   if (version2="") then version2="0.0.0.0."',
'   if (version1>"0.0.0.0" or version2>"0.0.0.0") then',
'   		if (version1>version2) then',
'   			installversion = version1',
'   			installpath = objShell.RegRead(regpath+"Foxmail\\Executable")',
'   		else',
'   			installversion = version2',
'   			installpath = objShell.RegRead(regpath+"FoxmailPreview\\Executable")',
'   		end if',
'   end if',
   
'   if installpath<>"" then',
'   		if(installversion>"7.0.0.0") then',
'		installpath= left(installpath, InStrRev(installpath,"\\")+InStrRev(installpath,"/"))',
'			if (fso.folderexists(installpath)) then',
'				if (fso.folderexists(installpath+"\\data\\")) then',
'					sigpath=installpath+"\\data\\Signatures\\"',
'				elseif fso.folderexists(installpath+"\\Global\\") then',
'					sigpath=installpath+"\\Global\\Signatures\\"',
'				else',
'					Msgbox("Sorry,find foxmail Signatures install path error")',
'			end if',
	
'			if (fso.folderexists(figpath)=false) then',
'				fso.createFolder(sigpath)',
'			end if',
'			sigfile= sigpath + "\\" + strSigName + ".htm"',
'			set sigfile = fso.createTextFile(sigfile,true)',
'				sigfile.write(getSignatureStr("<!--{$userInfo.name}-->","<!--{$userInfo.sign}-->","_colorIndex_"))',
'				sigfile.close',
'			msgbox decodeStr("-19511|-18010|-13830|-19511|-13094|-11850|-12638|-19799|-14423|-15365|-19019|-23622") + strSigName + vbcrlf + decodeStr("-14357|-13610|-18769|-13848|-10557|-12630|-15188|-14129|-19004|-11318|-17154|-14423|-15365")',		
'		end if',
'		else', 
'		msgbox decodeStr("-15110|-20302|-10320|-19004")+"foxmail"+decodeStr("-20250|-20034|-13141|-16695")+","+decodeStr("-14357|-13827|-17226|-15110|-19004")+"foxmail"+decodeStr("-19011")+"7.0"+decodeStr("-11564|-13873")',
'		end if',
'   else',
'	msgbox decodeStr("-15110|-17479|-12620|-20302|-10320")+"Foxmail"+decodeStr("-16435|-17497|-18741|-23647")',
'   end if',
'   \'strSigFolder = ObjShell.ExpandEnvironmentStrings("%appdata%") & "\\Microsoft\\Signatures\\"',
'   \'HTMFileString = strSigFolder & strSigName',
'   Set objShell = Nothing',
'   Set fso=nothing',

'Function decodeStr(str)',
'	Dim arr',
'	Dim arr2',
'	arr=Split(str,"|")',
'	Redim arr2(Ubound(arr))',
'	For i=0 to Ubound(arr)',
'	arr2(i)=Chr(arr(i))',
'	Next',
'	decodeStr=Join(arr2,"")',
'End Function',

'Function getSignatureStr(uname,usign,pindex)',
'Dim str',
'str = "<!doctype html public ""-//w3c//dtd html 4.0 transitional//en"">" + vbcrlf',
'str = str + "<html><head>" + vbcrlf',
'str = str + "<meta content=""text/html; charset=gb2312"" http-equiv=content-type>" + vbcrlf',
'str = str + "<meta name=generator content=""mshtml 8.00.7600.16853"">" + vbcrlf',
'str = str + "<style>blockquote{margin-top:0px; margin-bottom:0px;margin-left: 2em}" + vbcrlf',
'str = str + "ol{margin-top: 0px;margin-bottom: 0px}" + vbcrlf',
'str = str + "ul{margin-top: 0px;margin-bottom: 0px}" + vbcrlf',
'str = str + "p{margin-top: 0px;margin-bottom: 0px}" + vbcrlf',
'str = str + "body{line-height: 1.5;font-family: \'MicroSoft YaHei\'; color:#000000;font-size: 10.5pt}" + vbcrlf',
'str = str + "</style>" + vbcrlf',
'str = str + "</head>" + vbcrlf',
'str = str + "<body>" + vbcrlf',
'str = str + "<div><a href=""http://t.qq.com/"+uname+""" target=_blank>" + vbcrlf',
'str = str + "<img border=0 src=""http://v.t.qq.com/sign/"+uname+"/"+usign+"/"+pindex+".jpg"" width=380 height=100/>" + vbcrlf',
'str = str + "</a><br/>"',
'str = str + "<a href=""http://open.t.qq.com/websites/sign?explain=1"" target=""_blank"">"+decodeStr("-12590|-11598|-12309|-11046|-12590|-19004|-11318|-12316|-10544|-13639|-11325|-13094|-11850|-12638|-19799|-14423|-15365|-19019")+"</a>"',
'str = str + "</div></body></html>" + vbcrlf',
'getSignatureStr=str',
'End Function'
].join("\r");