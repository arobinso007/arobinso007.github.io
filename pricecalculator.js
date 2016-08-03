var electricity;
var water;
var materials;
var labor;
var lb2gram = .00220462;
var gram2oz = 28.3495;
var yield;
var cost;
var netGramPrice;
var el;

//function totalCost(){
//	
//}

function breakeven(){
	yield = document.breakevenForm.yield.value;
//	if(yield == 0){
//		document.write("You must enter a yield");
//	}
	
	cost = document.breakevenForm.cost.value;
	netGramPrice = cost/(yield/lb2gram);
//	document.breakevenForm.price.value = netprice;
	el = document.getElementById("gramBEP");
	el.textContent ="$" + netGramPrice.toFixed(2);
	el = document.getElementById("eigthOZ");
	el.textContent ="$" + (0.125*gram2oz*netGramPrice).toFixed(2);
	el = document.getElementById("quarterOZ");
	el.textContent ="$" + (0.25*gram2oz*netGramPrice).toFixed(2);
	el = document.getElementById("halfOZ");
	el.textContent ="$" + (0.5*gram2oz*netGramPrice).toFixed(2);
	el = document.getElementById("oneOZ");
	el.textContent ="$" + (gram2oz*netGramPrice).toFixed(2);
	
	
	el = document.getElementById("quarterLB");
	el.textContent ="$" + ((0.25/lb2gram)*netGramPrice).toFixed(2);
	el = document.getElementById("halfLB");
	el.textContent ="$" + ((0.5/lb2gram)*netGramPrice).toFixed(2);
	el = document.getElementById("oneLB");
	el.textContent ="$" + ((1/lb2gram)*netGramPrice).toFixed(2);
	
	
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
