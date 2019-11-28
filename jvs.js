var arr =['A','B','C','D','E','F','G','J','H','I','K','L','M','N','O','P','Q','R','S','T','U','W','V','X','Y','Z'];

var myvar = setInterval(myTimer, 5000);

var store=window.localStorage;

window.addEventListener ('load',function(e){
store.setItem(store.length+1,new template(e));
});

window.addEventListener ('unload',function(e){
store.setItem(store.length+1,new template(e));
});

var bnt=document.getElementsByClassName("bnt")[0];
bnt.addEventListener("click",function(e){
	
	store.setItem(store.length+1,new template(e));

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
					store.setItem(store.length+1,new template(e));


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
	if(number >=1 && number<=26)return true;
	return false;
}

function shuffle(arry){
	 arry.sort(() => Math.random() - 0.5);
	 return arry;
}

function myTimer() {
	window.localStorage.clear();
	store=window.localStorage;
}

function template(e){
	var DT=new Date();
	this.target=e.target;this.type=e.type;this.event=DT;
	this.fullDate=String(e.type)+'   '+String(e.target)+String(DT);
}
