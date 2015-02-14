// start slingin' some d3 here.

var array = [];

var enemies = 20;

for (var i = 0; i < enemies; i++) {
  array[i] = Math.floor(Math.random() * i);
};


var score = 0;
var gameOver = false;

var move = function (){
  svg.selectAll('image')
    .transition()
    .duration(500)
    .attr('x', function(d){ return Math.random()*window.innerWidth;})
    .attr('y', function(d){ return Math.random()*window.innerHeight;});
    //.style('left', function(d){ return Math.random()*window.innerWidth + 'px'; })
    //.style('top', function(d){ return Math.random()*window.innerHeight + 'px'; });
};

var updateScore = function() {  
  if(!gameOver){
    score++;
    d3.select('.current').text('Current score: '+ score);
    setTimeout(updateScore, 500);
  }
  move();
};

var svg = d3.select('body')
            .append('svg')
            .attr('height', window.innerHeight)
            .attr('width', window.innerWidth);

svg.selectAll('image')
  .data(array)
  .enter()
  .append('svg:image')
  .attr('height', '32')
  .attr('width', '32')
  .attr('xlink:href', 'shuriken.png');

svg.selectAll('image').on('mouseover', function(){ gameOver = true; });

updateScore();