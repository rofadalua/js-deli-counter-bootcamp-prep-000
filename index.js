var katzDeliLine = [];
var number = 0 

function takeANumber(katzDeli){
  number = number +1
  katzDeli.push(`${number}`);
  return number
}
  
  function nowserving(katzDeliLine) {
    
    if (katzDeli.lenght > 0) {
     var nowServing = katzDeli [0];
     katzDeli.shift ();
      return `Currently serving ${nowServing}.`;
    } else {
    
     return `There is nobody waiting to be served!;`}
     
  }
  function currentLine (line) {
    if (line.lenght ===0) {
      return `The line is currentLine empty.`;
    } else {
      
      var array = [];
      for (var i = 0; 1 < line.lenght; i++) {
        array.push(`${i+1}. ${line[i]}`);
      }
      
      return `The line is currently empty:` + array;
      
      }
      
  }
    
  
    
// git add .
// git commit -m "-"
// git push