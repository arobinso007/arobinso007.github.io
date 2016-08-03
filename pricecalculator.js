var electricity;
var water;
var materials;
var labor;
var lb2gram = .00220462;
var yield;
var cost;
var netGramPrice;
var el;

function totalCost(){
	
}

function breakeven(){
	yield = document.breakevenForm.yield.value;
//	if(yield == 0){
//		document.write("You must enter a yield");
//	}
	
	cost = document.breakevenForm.cost.value;
	netGramPrice = cost/(yield/lb2gram);
//	document.breakevenForm.price.value = netprice;
	el = document.getElementById("gramBEP");
	el.textContent = netGramPrice;
	
	el = document.getElementById("nickelBES");
	el.textContent = (5/netGramPrice).toFixed(3) + "g";
	el = document.getElementById("dimeBES");
	el.textContent = (10/netGramPrice).toFixed(3) + "g";
	el = document.getElementById("dubBES");
	el.textContent = (20/netGramPrice).toFixed(3) + "g";
//		(electricity+water+materials+labor)/(yield/lb2gram)
}

function pricePer(){
	
}

function profit(){
	
}
