var question2 = prompt("Do you want to re-place a sale offer for the rejected players? (YES or NO)");
if(question2=="YES" || question2=="yes" || question2=="Yes") {
	for (var j = 0;j<document.getElementsByClassName("wrapper player-list")[0].getElementsByClassName("btns").length;j++) {
		if(document.getElementsByClassName("wrapper player-list")[0].getElementsByClassName("btns")[j].getElementsByTagName("button")[0].getAttribute("class") == 'btn btn-decline btn-red') {
			document.getElementsByClassName("wrapper player-list")[0].children[j].getElementsByClassName("btn btn-grey btn-popup btn-resale")[0].click();
            new Promise(r => setTimeout(r, 1000));
			document.getElementById("btn-send").click();
            new Promise(r => setTimeout(r, 2000));
		} else {
        }
	}
	alert("All rejected offers were re-placed.");
} else {
	alert("No offers were re-placed.");
}
