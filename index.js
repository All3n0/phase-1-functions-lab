function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
      return blockNumber - 42;
    } else {
      return 42 - blockNumber;
    } blockNumber=50;
  }
  
  function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
  function distanceTravelledInFeet(start,end){
 
 if(end>start){ 
 return (end-start)*264;
 }else{
    return (start-end)*264;
 }
}
function calculatesFarePrice(start,end){
     const distance = distanceTravelledInFeet(start,end);
     if (distance<=400){
         return 0;
}else if (distance>400 && distance<2000)
  {      return 0.02 * (distance-400);
   }  else if (distance>2000 && distance<2500)
    {    return 25;
    }else (distance>2500)
     {   return "cannot travel that far";
}}