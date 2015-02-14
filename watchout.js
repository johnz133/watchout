// start slingin' some d3 here.

var array = [];

var enemies = 20;

for (var i = 0; i < enemies; i++) {
  array[i] = Math.floor(Math.random() * i);
}


var score = 0;
var gameOver = false;

//var rot = 0;
var move = function (){
  svg.selectAll('img')
    .transition()
    .duration(500)
    .style('left', function(d){ return Math.random()*window.innerWidth + 'px'; })
    .style('top', function(d){ return Math.random()*window.innerHeight + 'px'; });
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
            .append('div')
            .style('height', window.innerHeight+'px')
            .style('width', window.innerWidth+'px');

svg.selectAll('img')
  .data(array)
  .enter()
  .append('img')
  .style('height', '32px')
  .style('width', '32px')
  .attr('src', 'shuriken.png');
  
svg.selectAll('img').on('mouseover', function(){ gameOver = true; });

updateScore();