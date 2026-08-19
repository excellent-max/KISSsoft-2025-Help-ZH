function kiss_search(SearchWord,slabel){
	var Result="";
	var NrRes=0;
	Result='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n';
	Result+="<html>\n";
	Result+="<head>\n";
	Result+="<title>Search Results</title>\n";
	Result+="<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>\n";
	Result+='<script language="javascript" type="text/javascript" charset="UTF-8" src="dhtml_search.js"></script>\n';
	Result+='<script language="javascript" type="text/javascript" charset="UTF-8" src="dhtml_search_kiss.js"></script>\n';
	Result+='<script language="javascript" type="text/javascript" charset="UTF-8" src="configuration.js"></script>\n';
	Result+='<link rel="stylesheet" type="text/css" href="stylesheet.css">\n';
	Result+="<style type='text/css'>\n";
	Result+=".searchDetails {font-family:verdana; font-size:8pt; font-weight:bold}\n";
	Result+=".searchResults {font-family:verdana; font-size:8pt}\n";
	Result+="</style>\n";
	Result+="</head>\n";
	Result+="<body onload='javascript:document.SearchForm.SearchText.focus()'>\n";
	Result+='<table class="searchDetails" border="0" cellspacing="0" cellpadding="2" width="100%">\n';
	if (slabel) {Result+='<tr><td>'+slabel+':</td></tr>';};
	Result+='<tr><td>';
	Result+='<form name="SearchForm" action="javascript:kiss_search(document.SearchForm.SearchText.value,\''+slabel+'\')">';
	Result+='<input type="text" name="SearchText" size="25" style="width:120px" value="' + SearchWord + '" />';
	Result+='&nbsp;<input type="submit" value="&nbsp;Go&nbsp;"/></form>';
	Result+='</td></tr></table>\n';

	if(SearchWord.length>=1){
	   while(SearchWord.indexOf("<")>-1 || SearchWord.indexOf(">")>-1 || SearchWord.indexOf('"')>-1){
		   SearchWord=SearchWord.replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;");
	   }
	   SearchWord=foreignDecode(SearchWord.toLowerCase());
	   this.status="Searching, please wait...";
	   Result+="<table border='0' cellpadding='5' class='searchResults' width='100%'>";
	   for(j=0;j<PageCount;j++){
		   k=Page[j].length-1;
		   for(i=0;i<k;i++){
			   WordPos=Page[j][i].toLowerCase().indexOf(SearchWord);
			   if(WordPos>-1){
				   FoundWord=Page[j][i].substr(WordPos,SearchWord.length);
				   NrRes++;
				   Result+="<tr><td>";
				   Result+="<a href='"+Page[j][k]+"'>"+Page[j][k-1].replace(FoundWord,FoundWord.bold())+"</a><br/>\n";

				   if(i<k-1){
					   if(Page[j][i].length>350){
						   Result+="..."+Page[j][i].substr(WordPos-100,200+FoundWord.length).replace(FoundWord,FoundWord.bold())+"...\n";
					   }
					   else{
						   Result+=Page[j][i].replace(FoundWord,FoundWord.bold())+"\n";
					   }
				   }
				   Result+="</td></tr>";
				   break;
			   }
		   }
	   }
	   Result+="</table>";
	   Result+="<p class='searchDetails'>&nbsp;" + NrRes + " " + "Artikel gefunden" +".</p>";
	   Result=foreignEncode(Result);
	}

	Result+="</body></html>";
	this.status="";
	this.document.open();
	this.document.write(Result);
	this.document.close();
}