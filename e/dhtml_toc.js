// Functions for TOC

function exp(id) {
  var mySrc=document.getElementById('p'+id).src;
  // check current display state
  if (mySrc.slice(mySrc.lastIndexOf('/')+1) == 'minus.gif') {
    collapse(id);
  } else{
    expand(id);
  }
}

function expand(id) {
  var myDoc

  if (!top.TOC && !top.frames["ALL"]) {myDoc=document}
  else {if (top.TOC) {myDoc= top.TOC.document} else {myDoc=top.frames["ALL"].TOC.document}}

  with(myDoc.getElementById('s'+id)) {
    className='x';
    style.display=''; 
  }
  myDoc.getElementById('p'+id).src='minus.gif';
  myDoc.getElementById('b'+id).src='obook.gif';
}

function collapse(id) {
  with(document.getElementById('s'+id)) {
    className='x';
    style.display='none'; 
  }
  document.getElementById('p'+id).src='plus.gif';
  document.getElementById('b'+id).src='cbook.gif';
}

function highlight(id) {
  var myDoc

  if (!top.TOC && !top.frames["ALL"]) {myDoc=document}
  else {if (top.TOC) {myDoc= top.TOC.document} else {myDoc=top.frames["ALL"].TOC.document}}

  if(myDoc.getElementById('a'+id)) {myDoc.getElementById('a'+id).focus();}
}

function loadTOC() {
  // check current page displayed in TOC window.  If not toc.htm, load it.
  var myTOC
  if (top.TOC) {myTOC= top.TOC} else {myTOC=top.frames["ALL"].TOC}

  if (!isTOCLoaded()) {
    myTOC.location.href='toc.htm';
  }
}

function isTOCLoaded() {
  // return true, if toc.htm is loaded in TOC window.
  var myTOC

  if (!top.TOC && !top.frames["ALL"]) {return false};

  if (top.TOC) {myTOC= top.TOC} else {myTOC=top.frames["ALL"].TOC}
  var myPath=myTOC.location.pathname;
  var myFile=myPath.substr(myPath.length-7);

  if (myFile != 'toc.htm') {
    return false;
  } else {
    return true;
  }
}

function WebFXsetHeight() {
var minheight
var myDocBody,myDocToc
var y,x
var hhctrl
	if (_frame_height) {minheight=_frame_height} else {minheight=500};
	if (top.frames["BODY"]) 
		{myDocBody=top.frames["BODY"].document} 
	else 
		{
		if (!top.frames["ALL"]) {return};
		if (top.frames["ALL"].BODY) {
			myDocBody=top.frames["ALL"].BODY.document}
		else {
			myDocBody=top.frames["ALL"].document}
		};

	if (myDocBody.getElementById("data")) {
		y=myDocBody.getElementById("data").clientHeight+35;
		}
	else {
		y=top.frames["ALL"].frames["BODY"].frames["diagram"].document.body.clientHeight;
		x=top.frames["ALL"].frames["BODY"].frames["wireframe"].document.getElementById("data").clientHeight
		y=x + y + 10
		}
	// do scrolling in right frame
	if (_rightFrame_Scroll) {
		y=top.document.body.clientHeight -  _companyLogo_height - _headingFrame_Offset
		}

	if (y<minheight) {y=minheight};

	top.document.getElementById("BODYheight").height=y;

   	



}


	