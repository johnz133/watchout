var prime = function (n){

  var checkUpTo = Math.sqrt(n);
  if( n % 2 === 0){ return false };
  for(var i = 3; i < checkUpTo; i+=2){
    if( n % i !== 0){
      return false;
    }
  }

  return true;
}