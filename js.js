// RADO and Maros Java Script madafaka
//
let k = "The respective values are :";
let input = [10,50,40,50,80,90,70];
  function Geeks() {            
    //let input = document.getElementsByName('array[]'); 
      for (let i = 0; i < input.length; i++) {
          let a = input[i];
          k += "array[" + i + "].value = "+ a + " ";
        }
        return k;
  //document.getElementById("par").innerHTML = k;
  //document.getElementById("po").innerHTML = "Output";
      }

function min(){
let min = input[0];
for (let i = 0; i < input.length; i++){
  if (input[i] < min) {
    min = input[i];
  }
}
return min;
}

function max(){
  let max = input[0];
  for (let i = 0; i < input.length; i++){
    if (input[i] > max) {
      max = input[i];
    }
  }
  return max;
}

function sum(){
  let summary = 0;
  for (let i = 0; i < input.length; i++){
    summary += input[i];
  }
  return summary;
}

  function avg(){
    let avg_val = 0;    
    avg_val = sum() / input.length;
    avg_val = Math.round(avg_val);
    return avg_val;
  }  



console.log(min());
console.log(max());
console.log(input.length);
console.log(sum());
console.log(avg());
console.log(Geeks());
          
