// start slingin' some d3 here.

var array = [];

var enemies = 20;

for (var i = 0; i < enemies; i++) {
  array[i] = Math.floor(Math.random() * i);
};


var score = 0;
var gameOver = false;

var move = function (){
  d3.selectAll('.circle')
    .transition()
    .duration(500)
    .style('left', function(d){ return Math.random()*window.innerWidth + 'px'; })
    .style('top', function(d){ return Math.random()*window.innerHeight + 'px'; });
};

var updateScore = function() {
  //implement event  
  //event might trigger a flag to reset the score
  
  if(!gameOver){
    score++;
    d3.select('.current').text('Current score: '+ score);
    setTimeout(updateScore, 500);
  }

  move();
};


d3.select('body')
  .selectAll('div')
  .data(array)
  .enter()
  .append('div')
  .attr('class', 'circle');

d3.selectAll('.circle').on('mouseover', function(){ gameOver = true; });

updateScore();