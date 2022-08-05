var counter = 0;
var question = prompt("What requests would you like to reject, in percentage value? (50-> All offers under 50% value will be automatically rejected)");
for(var i =0;i< document.getElementsByClassName("wrapper player-list")[0].children.length;i++) {
	var node = document.createElement("DIV");
	var node2 = document.createElement("DIV");
	var offer = document.getElementsByClassName("wrapper player-list")[0].getElementsByClassName("amount green")[i].innerText;
	var value = document.getElementsByClassName("wrapper player-list")[0].getElementsByClassName("underName")[i].innerText;
	var text = document.getElementsByClassName("wrapper player-list")[0].getElementsByClassName("underName")[i].innerText;
	text = text.replaceAll(",",'');
	text = text.replaceAll("↑",'');
	text = text.replaceAll("↓",'');
	text = text.replaceAll(" ",'');
	offer = offer.replaceAll(",",'');
	value = value.replaceAll(",",'');
	value = value.replaceAll("↑",'');
	value = value.replaceAll("↓",'');
	value = value.replaceAll(" ",'');
	var number = text * 0.05;
	text = +Math.round(number) + +text;
	var percent = ((offer-value)/(text-value))*100;
	percent = percent.toFixed(2);
	percent = percent.toString().replace('%','');
	if(percent<question) {
		document.getElementsByClassName("btn btn-decline btn-grey")[i].click();
		counter++;
	}
	percent = percent + "%";
	text = text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var textnode = document.createTextNode(text);
	var textnode2 = document.createTextNode(percent);
	node.appendChild(textnode);
	node2.appendChild(textnode2);
	document.getElementsByClassName("wrapper player-list")[0].getElementsByClassName("player-row")[i].appendChild(node);
	document.getElementsByClassName("wrapper player-list")[0].getElementsByClassName("underName")[i].appendChild(node2);
}
alert(counter +"/"+i+" offers rejected");
