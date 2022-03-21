function showvis() {
    document.getElementById("vis").style.display="block";//显示
    document.getElementById("legend").style.display="block";//显示
    document.getElementById("chordref").style.display="none";//隐藏
	document.getElementById("chordcites").style.display="none";//隐藏
}

function chordRef() {
    //var obj=document.getElementById('vis');
    //obj.remove(); 
    document.getElementById("vis").style.display="none";//隐藏
    document.getElementById("legend").style.display="none";//隐藏
	document.getElementById("chordcites").style.display="none";//隐藏
    document.getElementById("chordref").style.display="block";//显示
}

function chordCites() {
    //d3.selectAll("svg > *").remove();
    document.getElementById("vis").style.display="none";//隐藏
    document.getElementById("legend").style.display="none";//隐藏
	document.getElementById("chordref").style.display="none";//隐藏
	document.getElementById("chordcites").style.display="block";//显示
}