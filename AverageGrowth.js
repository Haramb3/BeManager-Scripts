var node = document.createElement("DIV");
var dailyGrowth = document.getElementsByClassName("box box-records")[1].children[0].getElementsByClassName("left")[0].innerText;
var weeklyGrowth = document.getElementsByClassName("box box-records")[1].children[0].getElementsByClassName("left")[1].innerText;
var monthlyGrowth = document.getElementsByClassName("box box-records")[1].children[0].getElementsByClassName("left")[2].innerText;
dailyGrowth = dailyGrowth.replaceAll("One day","");
dailyGrowth = dailyGrowth.replaceAll(/(\r\n|\n|\r)/gm, "");
dailyGrowth = dailyGrowth.replaceAll(" ", "");
dailyGrowth = dailyGrowth.replaceAll(",", "");
dailyGrowth = dailyGrowth.replaceAll("↑",'');
dailyGrowth = dailyGrowth.replaceAll("↓",'');
weeklyGrowth = weeklyGrowth.replaceAll("One week","");
weeklyGrowth = weeklyGrowth.replaceAll(/(\r\n|\n|\r)/gm, "");
weeklyGrowth = weeklyGrowth.replaceAll(" ", "");
weeklyGrowth = weeklyGrowth.replaceAll(",",'');
weeklyGrowth = weeklyGrowth.replaceAll("↑",'');
weeklyGrowth = weeklyGrowth.replaceAll("↓",'');
monthlyGrowth = monthlyGrowth.replaceAll("One month","");
monthlyGrowth = monthlyGrowth.replaceAll(/(\r\n|\n|\r)/gm, "");
monthlyGrowth = monthlyGrowth.replaceAll(" ", "");
monthlyGrowth = monthlyGrowth.replaceAll(",",'');
monthlyGrowth = monthlyGrowth.replaceAll("↑",'');
monthlyGrowth = monthlyGrowth.replaceAll("↓",'');
if(document.getElementsByClassName("box box-records")[1].children[0].getElementsByClassName("left")[0].children[1].classList.value == "bottom red") {
	dailyGrowth = -dailyGrowth;
}
if(document.getElementsByClassName("box box-records")[1].children[0].getElementsByClassName("left")[1].children[1].classList.value == "bottom red") {
	weeklyGrowth = -weeklyGrowth;
}
if(document.getElementsByClassName("box box-records")[1].children[0].getElementsByClassName("left")[2].children[1].classList.value == "bottom red") {
	monthlyGrowth = -monthlyGrowth;
}
var averageGrowth = Math.round((+dailyGrowth + +weeklyGrowth/7 + +monthlyGrowth/30)/3);
var arrow = document.createElement("i");
if(averageGrowth<0) {
	arrow.setAttribute("class","ui-market-down red");
	node.setAttribute("class","prev-value red");
} else {
	arrow.setAttribute("class","ui-market-up green");
	node.setAttribute("class","prev-value green");
}
document.getElementsByClassName("section-title")[1].appendChild(arrow);
averageGrowth = averageGrowth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var textnode = document.createTextNode(averageGrowth);
node.appendChild(textnode);
document.getElementsByClassName("section-title")[1].appendChild(node);