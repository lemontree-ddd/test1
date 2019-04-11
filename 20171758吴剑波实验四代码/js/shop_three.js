function Good(img, name, price, num, sum) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.num = num;
    this.sum = this.price * this.num;
}
let good_array = Array.of(
    new Good("img/pms_1539768654.93828594!80x80.jpg","小米8 移动定制版 6GB内存 128GB 黑色 ",2499,1),
    new Good("img/购物车图2.jpg","米家电磁炉",299,1),
    new Good("img/购物车图3.jpg","小米无人机4K版套装白色",2999,1),
    new Good("img/购物车图4.jpg","小米无人机电池",399,1)
);
let show_tag = good_array.map(value =>
    `
    <div class="item-box">      
        <div class="col-check">
        <input class="icon-checkbox-1"  type="checkbox" name="items">
        </div>
        <div class="col-img-1"><img src="${value.img}" ></div>
        <div class="col-name-1">${value.name}</div>
        <div class="col-price-1">${value.price}</div>
        <div class="col-num-1">
            <button class="decrease_one del_button">-</button>
            <input class="item_quantity" value="${value.num}" type="text"> 
            <button class="increase_one add_button">+</button> 
        </div>
        <input class="col-total-1 total_price" value="${value.sum}"></input>
        <div class="col-action-1">       
                <input type="image" src="img/删 除.png" value="删除" class="remove_button" />
        </div>
    </div>
    `
).join("");
document.getElementById("new_tag").innerHTML = show_tag;

Array.from(document.getElementsByClassName("add_button")).forEach(value => {
        value.onclick = function () {
            let num = Number.parseInt(this.previousElementSibling.value);
            this.previousElementSibling.value = ++num;//num = num + 1
            let price = Number.parseFloat(this.parentElement.previousElementSibling.innerHTML);
            let sum = num * price;
            this.parentElement.nextElementSibling.value = sum;
        }
});

Array.from(document.getElementsByClassName("del_button")).forEach(value => {
        value.onclick = function () {
            let num = Number.parseInt(this.nextElementSibling.value);
            if(num <= 1){
                return;
            }
            this.nextElementSibling.value = --num;//num = num + 1
            let price = Number.parseFloat(this.parentElement.previousElementSibling.innerHTML);
            let sum = num * price;
            this.parentElement.nextElementSibling.value = sum;
        }
    });

Array.from(document.getElementsByClassName("remove_button")).forEach(value =>{
    value.onclick = function () {
        let item_box = this.parentElement.parentElement;
        item_box.parentElement.removeChild(item_box);
    }
});

document.getElementsByName("items").forEach(value => {
    value.onclick = function () {
        let item_box_child = this.parentElement.parentElement.children;
        let sum = Number.parseFloat(item_box_child.item(5).value);
        let total = Number.parseFloat(document.getElementsByClassName("cartTotalPrice")[0].innerHTML);
        if(this.checked){
            document.getElementsByClassName("cartTotalPrice")[0].innerHTML = String(sum + total);
        }else{
            document.getElementsByClassName("cartTotalPrice")[0].innerHTML = String(total - sum);
        }
    }
});

document.getElementById("checkAll").onclick = function () {
    document.getElementsByName("items").forEach(value => {
        value.checked = this.checked;
        value.onclick();       
    })
    let number=0;
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
};
 
