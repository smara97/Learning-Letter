var arr =['A','B','C','D','E','F','G','J','H','I','K','L','M','N','O','P','Q','R','S','T','U','W','V','X','Y','Z'];

var myvar = setInterval(myTimer, 5000);

var store=window.localStorage;

var elmnts=['Load','unload','Generate','button'];

window.addEventListener ('load',function(e){
	
var lis=[];

if (store.getItem("Load")==null){
lis.push(new template(e));
store.setItem("Load",JSON.stringify(lis));

}
else{
	lis=JSON.parse(store.getItem("Load"));
	lis.push(new template(e));
	store.setItem("Load",JSON.stringify(lis));
}

});

window.addEventListener ('unload',function(e){
	var lis=[];

if (store.getItem("unload")==null){
lis.push(new template(e));
store.setItem("unload",JSON.stringify(lis));

}
else{
	lis=JSON.parse(store.getItem("unload"));
	lis.push(new template(e));
	store.setItem("unload",JSON.stringify(lis));
}
});

var bnt=document.getElementsByClassName("bnt")[0];
bnt.addEventListener("click",function(e){
	
	var lis=[];

if (store.getItem("Generate")==null){
lis.push(new template(e));
store.setItem("Generate",JSON.stringify(lis));

}
else{
	lis=JSON.parse(store.getItem("Generate"));
	lis.push(new template(e));
	store.setItem("Generate",JSON.stringify(lis));
}
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
						var lis=[];

if (store.getItem("button")==null){
lis.push(new template(e));
store.setItem("button",JSON.stringify(lis));

}
else{
	lis=JSON.parse(store.getItem("button"));
	lis.push(new template(e));
	store.setItem("button",JSON.stringify(lis));
}

					path="Images/"+e.target.value+".png";
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
	var flag = false;
    var store = [];
    var itms = ['Load', 'unload', 'Generate','button'];
    for (var i = 0; i < 4; i++) {
		
        if (JSON.parse(localStorage.getItem(itms[i])) == null) continue;
		
        store = JSON.parse(localStorage.getItem(itms[i]));
		for (var j = 0; j < store.length; j++) {
            var ob = store[j];
            var Item = { "type": ob.type, "target": ob.target, "time": ob.time };
            $.ajax({
                "type": "POST",
                "url": "ajaxPOST.php",
                "data": { "data": JSON.stringify(Item) },
                "error": function () {
                    return ;
                }
            });
        }
 
    }
 
     window.localStorage.clear();
     localStorage = window.localStorage;
	store=localStorage;
}
var showing=document.getElementsByClassName("show")[0]
showing.addEventListener("click",function(e){
	$.ajax({
		"type":"GET",
		"url":"ajaxGET.php",
		"data":{"data":""},
		"success":function(response){
			var $pri=JSON.parse(response);
			for (var i =0;i<$pri.length;i++){
				console.log($pri[i]);
			}
		}
		
		
		
	});
	
	
});
function template(e){
	var DT=new Date();
	
	this.target=e.target;this.type=e.type;this.time=DT;
	this.fullDate=String(e.type)+'   '+String(e.target)+String(DT);
}