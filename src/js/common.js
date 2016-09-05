document.addEventListener("DOMContentLoaded",function(){
	//var 
	var designWidth = 320;
    var radio = document.documentElement.clientWidth / designWidth * 100 ;
    document.documentElement.style.fontSize = radio + "px";
},false)