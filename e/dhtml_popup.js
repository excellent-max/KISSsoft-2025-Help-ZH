// Copyright (c) 2004, AuthorIT Software Corporation Ltd.  All rights reserved.

// -Block-
function toggleBlock(pstrID){
  var myDiv = document.getElementById('d' + pstrID);
  if (myDiv){
    if (myDiv.style.display == 'none'){
      showBlock(pstrID);
    } else{
      hideBlock(pstrID);
    }
  }
}
function showBlock(pstrID){
  var myDiv = document.getElementById('d' + pstrID);
  if (myDiv){
    myDiv.style.display = 'block';
    var myImage = document.getElementById('i' + pstrID);
    if (myImage){
      myImage.src = 'arrowdown.gif';
      myImage.alt = 'Hide';
    }
  }
}
function hideBlock(pstrID){
  var myDiv = document.getElementById('d' + pstrID);
  if (myDiv){
    myDiv.style.display = 'none';
    var myImage = document.getElementById('i' + pstrID);
    if (myImage){
      myImage.src = 'arrowright.gif';
      myImage.alt = 'Show';
    }
  }
}

// -Inline-
function toggleInline(pstrID){
  var myDiv = document.getElementById('d' + pstrID);
  if (myDiv){
    if (myDiv.style.display == 'none') 
      showInline(pstrID);
    else 
      hideInline(pstrID);
  }
}
function showInline(pstrID){
  var myDiv = document.getElementById('d' + pstrID);
  if (myDiv){
    myDiv.style.display = 'inline';
  }
}
function hideInline(pstrID){
  var myDiv = document.getElementById('d' + pstrID);
  if (myDiv) {
    myDiv.style.display = 'none';
  }
}

// -Popup-
function togglePopup(pstrID, pstrHID){
  var myDiv = document.getElementById('d' + pstrID);
  if (myDiv){
    if (myDiv.style.display == 'none'){
      showPopup(pstrID, pstrHID);
    } else{
      hidePopup(pstrID);
    }
  }
}

function showPopup(pstrID, pstrHID){
  var myDiv = document.getElementById('d' + pstrID);
  var myAnchor = document.getElementById(pstrHID);
  if (myDiv && myAnchor){
    myDiv.style.visibility = 'visible';
    myDiv.style.display = 'block';

    // Calculate x and y position
    var divWidth = myDiv.offsetWidth ? myDiv.offsetWidth : myDiv.style.width ? parseInt( myDiv.style.width ) : 0;
    var divHeight = myDiv.offsetHeight ? myDiv.offsetHeight :  myDiv.style.height ? parseInt( myDiv.style.height ) : 0;
    var intX = getElementLeft(myAnchor);
    var intY = getElementTop(myAnchor) + myAnchor.offsetHeight;

    var maxX = getViewportWidth()+getViewportScrollX() 
    var maxY = getViewportHeight()+getViewportScrollY() 
    // Test if intX + the width of the div is greater than the viewport width.
    // If it is bigger, an adjustment is made.
    if (intX + divWidth > maxX ) {
	intX = maxX - divWidth - 15;
	}
    // Test if setY + the height of the div is greater than the viewport height.
    // If it is bigger, an adjustment is made.
    if (intY + divHeight > maxY ) {
	intY = maxY - divHeight - 15;
	}
    if (intX < getViewportScrollX() ) {intX=getViewportScrollX()}
    if (intY < getViewportScrollY() ) {intY=getViewportScrollY()}

    // Set x and y position
    myDiv.style.left = intX + "px";
    myDiv.style.top = intY + "px";
  }
}


getViewportWidth = function() {
	var width = 0;
	if( document.documentElement && document.documentElement.clientWidth ) {
		width = document.documentElement.clientWidth;
	}
	else if( document.body && document.body.clientWidth ) {
		width = document.body.clientWidth;
	}
	else if( window.innerWidth ) {
		width = window.innerWidth - 18;
	}
	return width;
};

getViewportHeight = function() {
	var height = 0;
	if( document.documentElement && document.documentElement.clientHeight ) {
		height = document.documentElement.clientHeight;
	}
	else if( document.body && document.body.clientHeight ) {
		height = document.body.clientHeight;
	}
	else if( window.innerHeight ) {
		height = window.innerHeight - 18;
	}
	return height;
};
getViewportScrollX = function() {
  var scrollX = 0;
  if( document.documentElement && document.documentElement.scrollLeft ) {
    scrollX = document.documentElement.scrollLeft;
  }
  else if( document.body && document.body.scrollLeft ) {
    scrollX = document.body.scrollLeft;
  }
  else if( window.pageXOffset ) {
    scrollX = window.pageXOffset;
  }
  else if( window.scrollX ) {
    scrollX = window.scrollX;
  }
  return scrollX;
};

getViewportScrollY = function() {
  var scrollY = 0;
  if( document.documentElement && document.documentElement.scrollTop ) {
    scrollY = document.documentElement.scrollTop;
  }
  else if( document.body && document.body.scrollTop ) {
    scrollY = document.body.scrollTop;
  }
  else if( window.pageYOffset ) {
    scrollY = window.pageYOffset;
  }
  else if( window.scrollY ) {
    scrollY = window.scrollY;
  }
  return scrollY;
};

function hidePopup(pstrID){
  var myDiv = document.getElementById('d' + pstrID);
  if (myDiv){
    myDiv.style.visibility = 'hidden';
    myDiv.style.display = 'none';
  }
}


// -ShowAll-
function toggleAll(pstrClass, pblnUpdate){
  var aLinks = document.links;
  var myAnchor;
  var myImage;

  for (var i=0; i < aLinks.length; i++) {
    if (aLinks[i].href.indexOf('toggleAll(\''+pstrClass) > -1) {
      myAnchor = aLinks[i];
      if (myAnchor.innerHTML == 'Show All') {
        showAll(pstrClass);
        if (pblnUpdate){
          myAnchor.innerHTML = 'Hide All';
          myAnchor.title = 'Hide All';
          myImage = myAnchor.previousSibling;
          if (myImage.nodeName == 'IMG'){
            myImage.src = 'arrowdown.gif';
            myImage.alt = 'Hide';
          }
        }
      } else{
        hideAll(pstrClass);
        if (pblnUpdate){
          myAnchor.innerHTML = 'Show All';
          myAnchor.title = 'Show All';
          myImage = myAnchor.previousSibling;
          if (myImage.nodeName == 'IMG'){
            myImage.src = 'arrowright.gif';
            myImage.alt = 'Show';
          }
        }
      }
    }
  }

}
function showAll(pstrClass) {
  var aElts = document.getElementsByTagName('div');
  setDisplay(pstrClass, aElts, 'show', 'Block');
  aElts = document.getElementsByTagName('span');
  setDisplay(pstrClass, aElts, 'show', 'Inline');
}
function hideAll(pstrClass) {
  var aElts = document.getElementsByTagName('div');
  setDisplay(pstrClass, aElts, 'hide', 'Block');
  aElts = document.getElementsByTagName('span');
  setDisplay(pstrClass, aElts, 'hide', 'Inline');
}
function setDisplay(pstrClass, paElts, pstrDisplay, pstrType){
  for (var i=0; i < paElts.length; i++) {
    if (paElts[i].className == pstrClass) {
      eval(pstrDisplay + pstrType + '("' + paElts[i].id.slice(1) + '")')
    }
  }
}

// -Fns to determine absolute position of an element-
function getElementLeft(pElt){
  var intX = pElt.offsetLeft;
  while ((pElt = pElt.offsetParent) != null){
    intX += pElt.offsetLeft; 
  }
  return intX;
}
function getElementTop(pElt){
  var intY = pElt.offsetTop;
  while((pElt = pElt.offsetParent) != null){
    intY += pElt.offsetTop;
  }
  return intY;
}


// USAGE:
// Create an object for a WINDOW popup
// var win = new PopupWindow(); 

// Create an object for a DIV window using the DIV named 'mydiv'
// var win = new PopupWindow('mydiv'); 

// Set the window to automatically hide itself when the user clicks 
// anywhere else on the page except the popup
// win.autoHide(); 

// Show the window relative to the anchor name passed in
// win.showPopup(anchorname);

// Hide the popup
// win.hidePopup();

// Set the size of the popup window (only applies to WINDOW popups
// win.setSize(width,height);

// Populate the contents of the popup window that will be shown. If you 
// change the contents while it is displayed, you will need to refresh()
// win.populate(string);

// set the URL of the window, rather than populating its contents
// manually
// win.setUrl("http://www.site.com/");

// Refresh the contents of the popup
// win.refresh();

// Specify how many pixels to the right of the anchor the popup will appear
// win.offsetX = 50;

// Specify how many pixels below the anchor the popup will appear
// win.offsetY = 100;

/* SOURCE FILE: AnchorPosition.js */
function getAnchorPosition(anchorname){var useWindow=false;var coordinates=new Object();var x=0,y=0;var use_gebi=false, use_css=false, use_layers=false;if(document.getElementById){use_gebi=true;}else if(document.all){use_css=true;}else if(document.layers){use_layers=true;}if(use_gebi && document.all){x=AnchorPosition_getPageOffsetLeft(document.all[anchorname]);y=AnchorPosition_getPageOffsetTop(document.all[anchorname]);}else if(use_gebi){var o=document.getElementById(anchorname);x=AnchorPosition_getPageOffsetLeft(o);y=AnchorPosition_getPageOffsetTop(o);}else if(use_css){x=AnchorPosition_getPageOffsetLeft(document.all[anchorname]);y=AnchorPosition_getPageOffsetTop(document.all[anchorname]);}else if(use_layers){var found=0;for(var i=0;i<document.anchors.length;i++){if(document.anchors[i].name==anchorname){found=1;break;}}if(found==0){coordinates.x=0;coordinates.y=0;return coordinates;}x=document.anchors[i].x;y=document.anchors[i].y;}else{coordinates.x=0;coordinates.y=0;return coordinates;}coordinates.x=x;coordinates.y=y;return coordinates;}
function getAnchorWindowPosition(anchorname){var coordinates=getAnchorPosition(anchorname);var x=0;var y=0;if(document.getElementById){if(isNaN(window.screenX)){x=coordinates.x-document.body.scrollLeft+window.screenLeft;y=coordinates.y-document.body.scrollTop+window.screenTop;}else{x=coordinates.x+window.screenX+(window.outerWidth-window.innerWidth)-window.pageXOffset;y=coordinates.y+window.screenY+(window.outerHeight-24-window.innerHeight)-window.pageYOffset;}}else if(document.all){x=coordinates.x-document.body.scrollLeft+window.screenLeft;y=coordinates.y-document.body.scrollTop+window.screenTop;}else if(document.layers){x=coordinates.x+window.screenX+(window.outerWidth-window.innerWidth)-window.pageXOffset;y=coordinates.y+window.screenY+(window.outerHeight-24-window.innerHeight)-window.pageYOffset;}coordinates.x=x;coordinates.y=y;return coordinates;}
function AnchorPosition_getPageOffsetLeft(el){var ol=el.offsetLeft;while((el=el.offsetParent) != null){ol += el.offsetLeft;}return ol;}
function AnchorPosition_getWindowOffsetLeft(el){return AnchorPosition_getPageOffsetLeft(el)-document.body.scrollLeft;}
function AnchorPosition_getPageOffsetTop(el){var ot=el.offsetTop;while((el=el.offsetParent) != null){ot += el.offsetTop;}return ot;}
function AnchorPosition_getWindowOffsetTop(el){return AnchorPosition_getPageOffsetTop(el)-document.body.scrollTop;}


/* SOURCE FILE: PopupWindow.js */

function PopupWindow_getXYPosition(anchorname){var coordinates;if(this.type == "WINDOW"){coordinates = getAnchorWindowPosition(anchorname);}else{coordinates = getAnchorPosition(anchorname);}this.x = coordinates.x;this.y = coordinates.y;}
function PopupWindow_setSize(width,height){this.width = width;this.height = height;}
function PopupWindow_populate(contents){this.contents = contents;this.populated = false;}
function PopupWindow_setUrl(url){this.url = url;}
function PopupWindow_setWindowProperties(props){this.windowProperties = props;}
function PopupWindow_refresh(){if(this.divName != null){if(this.use_gebi){document.getElementById(this.divName).innerHTML = this.contents;}else if(this.use_css){document.all[this.divName].innerHTML = this.contents;}else if(this.use_layers){var d = document.layers[this.divName];d.document.open();d.document.writeln(this.contents);d.document.close();}}else{if(this.popupWindow != null && !this.popupWindow.closed){if(this.url!=""){this.popupWindow.location.href=this.url;}else{this.popupWindow.document.open();this.popupWindow.document.writeln(this.contents);this.popupWindow.document.close();}this.popupWindow.focus();}}}
function PopupWindow_showPopup(anchorname){this.getXYPosition(anchorname);this.x += this.offsetX;this.y += this.offsetY;if(!this.populated &&(this.contents != "")){this.populated = true;this.refresh();}if(this.divName != null){if(this.use_gebi){document.getElementById(this.divName).style.left = this.x + "px";document.getElementById(this.divName).style.top = this.y + "px";document.getElementById(this.divName).style.visibility = "visible";}else if(this.use_css){document.all[this.divName].style.left = this.x;document.all[this.divName].style.top = this.y;document.all[this.divName].style.visibility = "visible";}else if(this.use_layers){document.layers[this.divName].left = this.x;document.layers[this.divName].top = this.y;document.layers[this.divName].visibility = "visible";}}else{if(this.popupWindow == null || this.popupWindow.closed){if(this.x<0){this.x=0;}if(this.y<0){this.y=0;}if(screen && screen.availHeight){if((this.y + this.height) > screen.availHeight){this.y = screen.availHeight - this.height;}}if(screen && screen.availWidth){if((this.x + this.width) > screen.availWidth){this.x = screen.availWidth - this.width;}}var avoidAboutBlank = window.opera ||( document.layers && !navigator.mimeTypes['*']) || navigator.vendor == 'KDE' ||( document.childNodes && !document.all && !navigator.taintEnabled);this.popupWindow = window.open(avoidAboutBlank?"":"about:blank","window_"+anchorname,this.windowProperties+",width="+this.width+",height="+this.height+",screenX="+this.x+",left="+this.x+",screenY="+this.y+",top="+this.y+"");}this.refresh();}}
function PopupWindow_hidePopup(){if(this.divName != null){if(this.use_gebi){document.getElementById(this.divName).style.visibility = "hidden";}else if(this.use_css){document.all[this.divName].style.visibility = "hidden";}else if(this.use_layers){document.layers[this.divName].visibility = "hidden";}}else{if(this.popupWindow && !this.popupWindow.closed){this.popupWindow.close();this.popupWindow = null;}}}
function PopupWindow_isClicked(e){if(this.divName != null){if(this.use_layers){var clickX = e.pageX;var clickY = e.pageY;var t = document.layers[this.divName];if((clickX > t.left) &&(clickX < t.left+t.clip.width) &&(clickY > t.top) &&(clickY < t.top+t.clip.height)){return true;}else{return false;}}else if(document.all){var t = window.event.srcElement;while(t.parentElement != null){if(t.id==this.divName){return true;}t = t.parentElement;}return false;}else if(this.use_gebi && e){var t = e.originalTarget;while(t.parentNode != null){if(t.id==this.divName){return true;}t = t.parentNode;}return false;}return false;}return false;}
function PopupWindow_hideIfNotClicked(e){if(this.autoHideEnabled && !this.isClicked(e)){this.hidePopup();}}
function PopupWindow_autoHide(){this.autoHideEnabled = true;}
function PopupWindow_hidePopupWindows(e){for(var i=0;i<popupWindowObjects.length;i++){if(popupWindowObjects[i] != null){var p = popupWindowObjects[i];p.hideIfNotClicked(e);}}}
function PopupWindow_attachListener(){if(document.layers){document.captureEvents(Event.MOUSEUP);}window.popupWindowOldEventListener = document.onmouseup;if(window.popupWindowOldEventListener != null){document.onmouseup = new Function("window.popupWindowOldEventListener();PopupWindow_hidePopupWindows();");}else{document.onmouseup = PopupWindow_hidePopupWindows;}}
function PopupWindow(){if(!window.popupWindowIndex){window.popupWindowIndex = 0;}if(!window.popupWindowObjects){window.popupWindowObjects = new Array();}if(!window.listenerAttached){window.listenerAttached = true;PopupWindow_attachListener();}this.index = popupWindowIndex++;popupWindowObjects[this.index] = this;this.divName = null;this.popupWindow = null;this.width=0;this.height=0;this.populated = false;this.visible = false;this.autoHideEnabled = false;this.contents = "";this.url="";this.windowProperties="toolbar=no,location=no,status=no,menubar=no,scrollbars=auto,resizable,alwaysRaised,dependent,titlebar=no";if(arguments.length>0){this.type="DIV";this.divName = arguments[0];}else{this.type="WINDOW";}this.use_gebi = false;this.use_css = false;this.use_layers = false;if(document.getElementById){this.use_gebi = true;}else if(document.all){this.use_css = true;}else if(document.layers){this.use_layers = true;}else{this.type = "WINDOW";}this.offsetX = 0;this.offsetY = 0;this.getXYPosition = PopupWindow_getXYPosition;this.populate = PopupWindow_populate;this.setUrl = PopupWindow_setUrl;this.setWindowProperties = PopupWindow_setWindowProperties;this.refresh = PopupWindow_refresh;this.showPopup = PopupWindow_showPopup;this.hidePopup = PopupWindow_hidePopup;this.setSize = PopupWindow_setSize;this.isClicked = PopupWindow_isClicked;this.autoHide = PopupWindow_autoHide;this.hideIfNotClicked = PopupWindow_hideIfNotClicked;}




