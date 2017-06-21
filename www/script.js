// calculate points
var points = 0;

var cost = 10;
var timesColorChange = 0;
var shapeColor;


//when shape is clicked, add 1 to points
function shapeClick(number){
    points = points + number; 
    document.getElementById("gamepoints").innerHTML = points;
}

var colorCost = 10;


function buyColor(){
    if(points >= cost){
        document.getElementById("cir").style.fill = randomColor();
        
        //how much is left after purchase color
        points=points-cost;
        document.getElementById("gamepoints").innerHTML = points;
        
        //update color cost        
        cost=cost+10;
        document.getElementById("colorCost").innerHTML = cost;
        
        //update times color change
        timesColorChange++;
        document.getElementById("timesColorChange").innerHTML = timesColorChange;

    }
    else{
        alert("You don’t have enough points :(");
    }
}
function randomColor(){
    var letters = '0123456789ABCDEF';
    var hex = '#';
	//for loop	
	for(i = 0; i < 6; i++){
        //color = #random combination of letters array [round to nearest integer (random method x 16 characters in the string)]
        //Math.floor and Math.random are built-in functions of Javascript
                hex = hex + letters[Math.floor(Math.random() * 16)];    
	}
    return hex;
}
function save(){
    
}
function load(){
    
}
function startOver(){
    
}