var arr =['A','B','C','D','E','F','G','J','H','I','K','L','M','N','O','P','Q','R','S','T','U','W','V','X','Y','Z'];

var myvar = setInterval(myTimer, 5000);

var store=window.localStorage;

window.addEventListener ('load',function(e){
var DT=new Date();
var fullDate=String(e.type)+'   '+String(e.target)+'  Open  website on Date '+String(DT.getDate())+'-'+String(DT.getMonth()+1)+'-'+String(DT.getFullYear())+'	at Time '+String(DT.getHours())+':'+String(DT.getMinutes())+':'+String(DT.getSeconds());
store.setItem(store.length+1,fullDate);
});
window.addEventListener ('unload',function(e){
var DT=new Date();
var fullDate=String(e.type)+'   '+String(e.target)+'Unload website on Date '+String(DT.getDate())+'-'+String(DT.getMonth()+1)+'-'+String(DT.getFullYear())+'		Time '+String(DT.getHours())+':'+String(DT.getMinutes())+':'+String(DT.getSeconds());
store.setItem(store.length+1,fullDate);
});

var bnt=document.getElementsByClassName("bnt")[0];
bnt.addEventListener("click",function(e){
	var DT=new Date();
	var fullDate=String(e.type)+'   '+String(e.target)+'	Click Generate Button on Date '+String(DT.getDate())+'-'+String(DT.getMonth()+1)+'-'+String(DT.getFullYear())+'		Time '+String(DT.getHours())+':'+String(DT.getMinutes())+':'+String(DT.getSeconds());
	store.setItem(store.length+1,fullDate);


	var txt=document.getElementsByClassName("txt")[0];
	if(correct(txt.value)){
		var divsb=document.getElementsByTagName("div");
		arr=shuffle(arr);
		divsb[0].innerHTML="";
		divsb[1].innerHTML="";
		for (var i=0;i<parseInt(txt.value);i++){
			var elment=document.createElement('button');
			elment.value=arr[i];
			elment.textContent=arr[i];
			elment.setAttribute('class',"btns");
			divsb[0].appendChild(elment);
		}
		var elms =document.getElementsByClassName('btns');
		for(var i=0;i<elms.length;i++){
				tx=elms[i].value;
				elms[i].addEventListener('click',function(e){
					var DT=new Date();
					var fullDate=String(e.type)+'   '+String(e.target)+'	Click '+e.target.value+'	Letter Button Date '+String(DT.getDate())+'-'+String(DT.getMonth()+1)+'-'+String(DT.getFullYear())+'		Time '+String(DT.getHours())+':'+String(DT.getMinutes())+':'+String(DT.getSeconds());
					store.setItem(store.length+1,fullDate);


					path="/home/ahmed/Desktop/FCI/Images/"+e.target.value+".png";
					var img=document.createElement("img");
					img.src=path;
					img.setAttribute('class','imgs');
					var dv=document.getElementsByClassName("divs")[0];
					dv.innerHTML="";
					dv.appendChild(img);
					
					
				});
		}
	}
	else{
		alert("Please chooce correct number between 1 and 26 !");
	}
	
});

function correct(content){
	if(content.length<1 || content.length>2)return false
	 var number=0;
	try{
		number=parseInt(content);
	}
	catch{
		return false;
	}
	if(number >26)return false;
	return true;
}

function shuffle(arry){
	 arry.sort(() => Math.random() - 0.5);
	 return arry;
}

function myTimer() {
	window.localStorage.clear();
	store=window.localStorage;
}