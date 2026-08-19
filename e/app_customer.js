

function wrCustHeader() {

wr("<table border='0' width='100%' cellpadding='0' cellspacing='0'>")
	wr("<tr style='background-color:#ededed'>")
		wr("<td width='239' height='122' rowspan='1' colspan='2'></td>")
		wr("<td width='%' height='122' align='right'><a href='" + _companyLogo_link + "' target=_blank alt='KISSsoft'><img src='kisssoft-claim_horiz-blue-grey_rgb_300dpi_png.png' width='45%' height='45%'></a></td>")
		wr("<td width='40' height='122' align='right'></td>")
	wr("</tr>")

	wr("<tr style='background-color='white'>")
		wr("<td width='%' height='20' align='right'></td>")
	wr("</tr>")

	wr("<tr>")
		wr("<td width='150' height='15'>")
		if (!false) {
			wr("<a href='toc.htm' target=TOC onMouseOver=\"window.status='" + _subMenu_content + "';return true;\" onMouseOut=\"window.status='';return true;\"><font style='font-size:12px;font-weight:bold;font-family:sans-serif;'>" + _subMenu_content  + "</font></a>")
			wr("&nbsp;&nbsp;")
			}
		if (!false) {
			wr("<a href='indexpage.htm' target=TOC onMouseOver=\"window.status='" + _subMenu_Index + "';return true;\" onMouseOut=\"window.status='';return true;\"><font style='font-size:12px;font-weight:bold;font-family:sans-serif;'>" + _subMenu_Index  + "</font></a>")
			wr("&nbsp;&nbsp;")
			}
		if (!false) {
			wr("<a href='dhtml_search.htm' target=TOC onMouseOver=\"window.status='" + _subMenu_Index + "';return true;\" onMouseOut=\"window.status='';return true;\"><font style='font-size:12px;font-weight:bold;font-family:sans-serif;'>" + _subMenu_Search  + "</font></a>")
			}
		wr("</td>")
		wr("<td width='89' height='15' align='right'>")
		wr("<a id='aContact' name='aContact' href='javascript:return false' onclick=\"javascript:win.offsetY=15;win.showPopup('aContact');return false\" onMouseOver=\"window.status='" + _companyContact_label + "';return true;\" onMouseOut=\"window.status='';return true;\"><font style='font-size:12px;font-weight:bold;font-family:sans-serif;'>" + _companyContact_label  + "</font></a>")
		wr("</td>")
		wr("<td width='%' height='15'>")
		wr("&nbsp;")
		wr("</td>")
	wr("</tr>")
	wr("<tr style='background-color='white'>")
		wr("<td width='%' height='5' align='right'></td>")
	wr("</tr>")
wr("</table>")


	}

function wrCustTOCStart() {
 var kiss;

 if (query_vars['kiss']) {kiss=true;}


 if ((!top.TOC && !top.frames["ALL"]) || (kiss)) {
 // called by KISSsoft application
  document.body.style.backgroundColor='#FFFFFF'
  wr("<style>a:link{background-color:#FFFFFF};a:visited{background-color:#FFFFFF}</style>");
 }

}

function wrCustTOCEnd() {
}

function doNothing() {}


function hasCustHeader() {return true};

function hasCustTOC() {return true};