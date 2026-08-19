var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();


function doNothing() {}

function checkReturn() {}


function URLEncode(str) {

	if (str.length>0) {	
		return escape(str)
		}
	else 	{
		return ''
		}
	
}

function URLDecode(str)
{
  return unescape(str);
  }

function read_querystring()
   {
   var a_out = new Object();
   var s_loc = String(location.href);

   if(s_loc.indexOf('?')>0)
     {
     var p;
     var s_query = s_loc.substr(s_loc.indexOf('?')+1);
     var a_query = s_query ? s_query.split('&') : new Array();

     for(var i=0; i<a_query.length; i++)
       {
       p = a_query[i].split('=');
       a_out[p[0]] = p[1].replace(/\+/g, ' ');
       }
     }
   return a_out;
   }

function splitNav(s) {
   var a_out = new Array();

     var p;

     if (s) {
	var a_query = s ? s.split('|') : new Array();

     	for(var i=0; i<a_query.length; i++)
     	  {
     	  p = a_query[i].split('@');
     	  if (p[0]!='') {
     	  	  p[1]=p[1].replace(/\+/g, ' ')
     	  	  a_out[i]=p 
		  }
       	   }
     }
   return a_out;
   }
 
function printWindow(){
var myFrame
   bV = parseInt(navigator.appVersion)
   if (bV >= 4) {
	if (top.frames["BODY"]) {myFrame=top.frames["BODY"]} else {myFrame=top.frames["ALL"].BODY};

	myFrame.focus()
	myFrame.print()
	}
}

function setFrameWidth() {
var minwidth, maxwidth;

	if (_rightFrame_widthMin) {minwidth=_rightFrame_widthMin} else {minwidth=500};
	if (_rightFrame_widthMax) {maxwidth=_rightFrame_widthMax} else {maxwidth=1000};
	y=document.body.clientWidth - act_leftFrame_width - _leftBorder_width - _rightBorder_width - 20;
	if (y<minwidth) {y=minwidth};
	if (y>maxwidth) {y=maxwidth};

	return y;
	}

function setNavString() {
	var x=query_vars['nav'];
	if (!x) {x=''} else {x=unescape(x) + '|'};
	x=x + '' + '@' 

	var URL = unescape(String(location.href))	// get current URL in plain ASCII

	var xend = URL.lastIndexOf("/") 
	var xstart=URL.substring(0,xend).lastIndexOf("/") +1

	x = x + URL.substring(xstart,xend)
	return '?nav=' + escape(x)
	}

function setNavLink()  {
var s='';
var returnNav='';

	if (!query_vars['nav']) {return '&nbsp;'};
	var nav=unescape(query_vars['nav'])
	if (nav.lastIndexOf("|")==nav.length) {nav=nav.substring(0,nav.length-1)};
	if (nav) {
		var nav_vars=splitNav(nav);
		for(var i=0; i<nav_vars.length; i++)
			{
			if (s!='') {s+='&nbsp;&gt;&nbsp;'};
			s+="<a href='../" + nav_vars[i][1] + "/index.htm" + returnNav + "' target=_top>" + nav_vars[i][0] + "</a>"
			if (returnNav=='') {returnNav='?nav='};
			if (i>0) {returnNav+="|"};
			returnNav+=nav_vars[i][0] + "@" + nav_vars[i][1]
			};
		}
	else {s='&nbsp;'}

	return s;
	};

function instr (s,z)	{

var loop=0;

   for(loop=0; loop<=s.length-z.length; loop++)
   	{
	if (s.substring(loop,loop+z.length)==z)
	   return loop;
	}
   return -1;
   }


function replaceString (string,text,by)	{
    
   var i = string.indexOf(text);

   if ((i == -1)) return string;
   
   var newstr = string.substring(0,i) + by;
   if (i+text.length < string.length)
        newstr +=replaceString(string.substring(i+text.length,string.length),text,by);
   return newstr;
   }

function newDialog(f)	{
// f: url
// n: winodw name
// g: window variable

var n;
var topic;
	
	topic=top.document.all('topicid').value
	if (instr(f,'?')<0) {s='?'} else {s='&'};
	if (browser!="Netscape") {
		w= 600
		h= 400
		l= (screen.width) ? (screen.width-w)/2 : 0;
		t= (screen.height) ? (screen.height-h)/2 : 0;
		t='dialogTop:'+t+'px;dialogLeft:'+l+'px;dialogWidth:'+w+'px;dialogHeight='+h+'px';
		window.showModalDialog(f+s+'id='+topic,'',t + ';resizable:yes;scroll:yes');
		}
	else {
		l= (screen.width) ? (screen.width-800)/2 : 0;
		t= (screen.height) ? (screen.height-600)/2 : 0;
		w= 600
		h= 400
		t='top='+t+',left='+l+',width='+w+',height='+h;

		g=window.open(f+s+'id='+topic,n,'modal=yes,dependent=yes,' + t + ',titlebar=yes,resizable=yes,scrollbars=yes');
		if (!g) {alert('Display of Popup Window blocked')};
		}

	top.document.frames['ALL'].frames['BODY'].location=top.document.frames['ALL'].frames['BODY'].location
	}
