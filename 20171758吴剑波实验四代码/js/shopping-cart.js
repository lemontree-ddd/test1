window.onload=function(){
	
	document.getElementById("checkAll").onclick=function(){
		let flag=this.checked;
		let items=document.getElementsByName("items");
		for(let i=0;i<items.length;i++){
			items[i].checked=flag;
		}
	}
		let items=document.getElementsByName("items");
		for(let i=0;i<items.length;i++){
			items[i].onclick=function(){
				let number=0;
				for(let j=0;j<items.length;j++){
					if(items[j].checked){
						number++;
					}	
				}
				document.getElementById("checkAll").checked=
					(items.length==number);
			}
		}
		
	
}


function dec(obj,n){
				let tr=obj.nextElementSibling;
				let num=tr.value;	
				if(num<=1&&n<0){
					return;
				}
				num--;
				tr.setAttribute("value",num);
				let price=obj.parentElement.previousElementSibling.firstChild.nodeValue;
				let m=price*num;
				obj.parentElement.nextElementSibling.setAttribute("value",m);
			}
			
function inc(obj){
				let tr=obj.previousElementSibling;
				let num=tr.value;	
				num++;
				tr.setAttribute("value",num);
				let price=obj.parentElement.previousElementSibling.firstChild.nodeValue;
				let m=price*num;
				obj.parentElement.nextElementSibling.setAttribute("value",m);
			}


function btndelete(i){
		let box=i.parentNode.parentNode;	
		box.parentNode.removeChild(box);
}
