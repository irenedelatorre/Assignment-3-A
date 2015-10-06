
//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	.attr('transform','translate('+margin.t+','+margin.l+')');
		//.attr('transform','translate()') --> complete this line here


//Start with 100 symbols
var numOfSymbols = 100;

//Create an array, generate objects to push into the array
//Attributes of these symbols are
// --> x position: between 0 and width
// --> y position: betewen 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color
var symbols = [];

//With the array you've created and populated, draw circles to represent these symbols

for (var i=0;i<numOfSymbols;i++) {
    var newSymbol = Math.random(); //random size
    var newPositionsXY = Math.random(); //random position
    var newColorA = Math.round(1000000*Math.random()); //random color
    symbols.push([newSymbol, newPositionsXY, newColorA])
}

// color --> #xxxxxx



symbols.forEach(function(trial,index){
    if (trial[0] < 1 / 2) {
        plot
            .append('circle')
            .attr('cx', (index / numOfSymbols) * width)
            .attr('cy',( trial[1]) * height)
            .attr('r', (trial[0] * 50))
            .style('fill', ("#"+trial[2]));
        console.log(trial[2])
    }
    else if (trial[0] > 1 / 2) {
        plot
            .append('rect')
            .attr('x', (index / numOfSymbols) * width)
            .attr('y',( trial[1]) * height)
            .attr('width', (trial[0] * 100))
            .attr('height', (trial[0] * 100))
            .style('fill', ("#"+trial[2]));
        console.log("index")
    }
});